import { Component, OnInit, OnDestroy } from '@angular/core';
import { StyleModeService } from '../../services/style-mode.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy{

  destroy$: Subject<boolean> = new Subject()
  
  styleMode: boolean

  constructor(
    private styleModeService: StyleModeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.styleModeService.getStyleMode()
    .pipe(takeUntil(this.destroy$))
    .subscribe(mode => {
      this.styleMode = mode
    })
  }
  onChangeMode(event) {
    this.styleModeService.changeStyleMode(event.checked)
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }

  logOut() {
    this.authService.logOut()
  }

}
