import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from 'src/app/core/services/author.service';
import { map, switchMap, tap, takeUntil} from 'rxjs/operators';
import { Author } from 'src/app/core/interfaces/Author';
import { Song } from 'src/app/core/interfaces/Song';
import { PlaylistService } from 'src/app/core/services/playlist.service';
import { StyleModeService } from 'src/app/core/services/style-mode.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.sass']
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {

  author: Author
  id: string
  styleMode: boolean
  destroy$: Subject<boolean> = new Subject()
  currentSong: Song
  userPlaylist: Song[]

  constructor(
    private acRouter: ActivatedRoute,
    private authorService: AuthorService,
    private playlistService: PlaylistService,
    private styleModeService: StyleModeService
  ) { }

  ngOnInit() {
    this.styleModeService.getStyleMode()
      .pipe(takeUntil(this.destroy$))
      .subscribe(mode => this.styleMode = mode)

    this.acRouter.params.pipe(
      takeUntil(this.destroy$),
      map((params: Params) => params.id),
      tap(id => {this.playlistService.setCurrentPlaylist(id)}),
      switchMap((name: string) => {
        return this.authorService.getAuthorsByName(name)
      })
    ).subscribe((author: Author) => {
      this.author = author
    })

    this.playlistService.getUserPlaylist().subscribe(userPlaylist => {
      this.userPlaylist = userPlaylist
    })

  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }
}