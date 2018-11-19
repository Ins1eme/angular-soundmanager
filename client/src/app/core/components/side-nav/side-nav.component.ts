import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StyleModeService } from '../../services/style-mode.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit, OnDestroy {

  styleMode: boolean
  destroy$: Subject<boolean> = new Subject()

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

  ngOnDestroy() {
    this.destroy$.next(true)
  }

}
