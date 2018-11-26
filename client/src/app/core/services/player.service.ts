import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  audio: HTMLAudioElement
  
  constructor(
  ) {
    this.audio = new Audio()
  }

  load(url: string) {
    this.audio.src = url
    this.audio.load()
    
  }

  play(url: string): Promise<void> {
    if(this.isPlaying()) {
      return this.audio.play()
    } else {
      this.load(url)
      return this.audio.play()
    }
  }

  pause() {
    this.audio.pause()
  }

  isPlaying() {
    return this.audio.currentTime > 0 && this.audio.paused && this.audio.readyState > 2
  }

  setVolume(volume) {
    this.audio.volume = volume
  }

  setCurrentTime(value) {
    this.audio.currentTime = value
  }

}
