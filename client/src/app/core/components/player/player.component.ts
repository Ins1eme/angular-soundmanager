import { Component, OnInit, OnDestroy } from '@angular/core';
import { StyleModeService } from '../../services/style-mode.service';
import { Subject, zip, Observable, from } from 'rxjs';
import { takeUntil, switchMap, tap } from 'rxjs/operators';
import { PlaylistService } from '../../services/playlist.service';
import { Song } from '../../interfaces/Song';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject()
  styleMode: boolean
  playerState: boolean = false
  currentVolume: number = 0.4
  currentSong: Song
  currentPlaylist: Song[]
  index: number
  isLoadSong: boolean = true
  currentTime: number

  constructor(
    private styleModeService: StyleModeService,
    private playlistService: PlaylistService,
    private playerService: PlayerService,
  ) {}

  ngOnInit() {
    this.playerService.audio.volume = this.currentVolume

    this.styleModeService.getStyleMode()
      .pipe(takeUntil(this.destroy$))
      .subscribe(mode => {
        this.styleMode = mode
      })

    this.playlistService.getCurrentPlaylist().pipe(
      takeUntil(this.destroy$),
      switchMap(name => {
        if(name === "userPlaylist") {
          return this.playlistService.getUserPlaylist()
        } else {
          return this.playlistService.getCurrentPlaylistByAuthorName(name)
        }
      })
    ).subscribe(data => {
      this.currentPlaylist = data
    })

    this.playlistService.getCurrentSong().pipe(
      takeUntil(this.destroy$)
    ).subscribe((song: Song) => {

      this.currentSong = song
      this.index = this.currentPlaylist.findIndex((item: Song) => item._id === this.currentSong._id)
      if(this.isLoadSong) {
        this.playerService.load(this.currentSong.url)
        this.playerService.audio.ontimeupdate = () => {
          this.currentTime = this.playerService.audio.currentTime * 100 / this.playerService.audio.duration
        }
        this.playerService.audio.onended = () => {
          this.nextSong()
        }
        this.playSong()
      }
      
    })
  
  }

  playSong() {
    this.playerState = true
    this.isLoadSong = false

    from(this.playerService.play(this.currentSong.url)).subscribe(_ => {
      this.isLoadSong = true
    })
  }

  pauseSong() {
    if(this.isLoadSong) {
      this.playerState = false
      this.playerService.pause()
    }

  }

  nextSong() {
    if(this.index === this.currentPlaylist.length - 1) {
      this.index = 0
      this.currentSong = this.currentPlaylist[this.index]
    } else {
      this.currentSong = this.currentPlaylist[++this.index]
    }

    if(this.isLoadSong) {
      this.playerService.load(this.currentSong.url)
      if(this.playerState) {
        this.playSong()
      }
    }
    this.playlistService.setCurrentSong(this.currentSong)
  }

  previousSong() {
    if(this.index === 0) {
      this.playerService.audio.currentTime = 0
    } else {
      this.currentSong = this.currentPlaylist[--this.index]
    }
    if(this.isLoadSong) {
      this.playerService.load(this.currentSong.url)
      if (this.playerState) {
        this.playSong()
      }
    }
    this.playlistService.setCurrentSong(this.currentSong)
  }

  changeVolume(event) {
    this.playerService.setVolume(event.value)
  }

  onTimeChange(event) {
    if(this.isLoadSong) {
      this.playerService.setCurrentTime(event.value * this.playerService.audio.duration / 100)
    }
  }

  ngOnDestroy() {
    this.playerService.audio.pause()
    this.destroy$.next(true)
  }
}
