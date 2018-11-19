import { Component, OnInit, OnDestroy } from '@angular/core';
import { StyleModeService } from '../../services/style-mode.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject()
  styleMode: boolean
  playerState: boolean = false
  audio: HTMLAudioElement
  currentSong

  constructor(
    private styleModeService: StyleModeService
  ) { }

  ngOnInit() {
    this.styleModeService.getStyleMode()
      .pipe(takeUntil(this.destroy$))
      .subscribe(mode => {
        this.styleMode = mode
      })
  }

  playSong() {
    this.playerState = true
  }

  pauseSong() {
    this.playerState = false
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }
}
