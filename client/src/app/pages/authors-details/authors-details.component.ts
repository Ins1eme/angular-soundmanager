import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from 'src/app/core/services/author.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.sass']
})
export class AuthorsDetailsComponent implements OnInit {

  constructor(
    private acRouter: ActivatedRoute,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.acRouter.params.pipe(
      map((params: Params) => params.id),
      switchMap((name: string) => {
        return this.authorService.getAuthorsByName(name)
      })
    ).subscribe(data => {
      console.log(data)
    })
  }

}
