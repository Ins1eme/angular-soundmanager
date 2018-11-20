import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { StyleModeService } from 'src/app/core/services/style-mode.service';
import { Author } from 'src/app/core/interfaces/Author';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit, OnDestroy{

  destroy$: Subject<boolean> = new Subject()
  authors$: Observable<Author[]>
  styleMode: boolean

  constructor(
    private styleModeService: StyleModeService,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.styleModeService.getStyleMode()
    .pipe(takeUntil(this.destroy$))
    .subscribe(mode => {
      this.styleMode = mode
    })

    this.authors$ = this.authorService.getAuthors()
  }

  ngOnDestroy() {
    this.destroy$.next(true)
  }

}
