import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Author } from '../interfaces/Author';

@Injectable({
    providedIn: 'root'
})

export class AuthorService {

    constructor(
        private http: HttpClient
    ) {}


    getAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>('http://localhost:5000/api/music/authors')
    }

    getAuthorsByName(name: string): Observable<Author> {
        return this.http.get<Author>('http://localhost:5000/api/music/author', {params: {name}})
    }
}