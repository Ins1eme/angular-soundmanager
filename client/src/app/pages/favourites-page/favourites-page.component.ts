import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { PlaylistService } from 'src/app/core/services/playlist.service';
import { Song } from 'src/app/core/interfaces/Song';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.sass']
})
export class FavouritesPageComponent implements OnInit, OnDestroy {

  userPlaylist: Song[]
  destroy$: Subject<boolean> = new Subject()

  constructor(
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.playlistService.getUserPlaylist().subscribe(userPlaylist => {
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
