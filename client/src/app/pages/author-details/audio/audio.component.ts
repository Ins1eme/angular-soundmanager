import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Song } from 'src/app/core/interfaces/Song';
import { PlaylistService } from 'src/app/core/services/playlist.service';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { StyleModeService } from 'src/app/core/services/style-mode.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.sass']
})
export class AudioComponent implements OnInit, OnDestroy {

  @Input() song: Song
  @Input() userPlaylist: Song[]
  @Output() onPlaylistChange: EventEmitter<Song[]> = new EventEmitter()

  styleMode: boolean
  destroy$: Subject<boolean> = new Subject()
  isActive: boolean
  
  
  constructor(
    private playlistService: PlaylistService,
    private styleModeService: StyleModeService
  ) { }

  ngOnInit() {
    this.isActiveSong()
  }

  
  setCurrentSong() {
    this.playlistService.setCurrentSong(this.song)
  }

  addToPlaylist(event: Event) {
    event.stopPropagation()
    if(!this.isActive) {
      this.playlistService.addSongToUserPlaylist(this.song._id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(_ => {
          this.isActive = true
        })
    } else {
      this.playlistService.deleteSongFromUserPlaylist(this.song._id).subscribe(data => {
        this.isActive = false
        this.onPlaylistChange.emit(data)
      })
    }
  }

  download(event: Event) {
    event.stopPropagation()
    window.location.href = this.song.url
  }

  isActiveSong() {
    this.isActive = !!this.userPlaylist.find(i => i._id === this.song._id)
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }

}
