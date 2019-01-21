import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { PlaylistService } from 'src/app/core/services/playlist.service';
import { Song } from 'src/app/core/interfaces/Song';
import { takeUntil } from 'rxjs/operators';
import { StyleModeService } from 'src/app/core/services/style-mode.service';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.sass']
})
export class FavouritesPageComponent implements OnInit, OnDestroy {

  userPlaylist: Song[]
  destroy$: Subject<boolean> = new Subject()
  styleMode: boolean

  constructor(
    private playlistService: PlaylistService,
    private styleModeService: StyleModeService
  ) { }

  ngOnInit() {
    this.styleModeService.getStyleMode()
      .pipe(takeUntil(this.destroy$))
      .subscribe(styleMode => {
        this.styleMode = styleMode
      })
    this.playlistService.getUserPlaylist()
      .pipe(takeUntil(this.destroy$))
      .subscribe(userPlaylist => {
        this.userPlaylist = userPlaylist
      })
    this.playlistService.setCurrentPlaylist('userPlaylist')
  }

  changePlaylist(playlist) {
    this.userPlaylist = playlist
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }
}
