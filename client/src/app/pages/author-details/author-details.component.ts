import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from 'src/app/core/services/author.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Author } from 'src/app/core/interfaces/Author';
import { Song } from 'src/app/core/interfaces/Song';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.sass']
})
export class AuthorDetailsComponent implements OnInit {

  author: Author
  id: string

  constructor(
    private acRouter: ActivatedRoute,
    private authorService: AuthorService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.acRouter.params.pipe(
      map((params: Params) => params.id),
      tap(id => {this.playlistService.setCurrentPlaylist(id)}),
      switchMap((name: string) => {
        return this.authorService.getAuthorsByName(name)
      })
    ).subscribe((author: Author) => {
      this.author = author
    })

  }

  setCurrentSong(song: Song) {
    this.playlistService.setCurrentSong(song)
  }

}
