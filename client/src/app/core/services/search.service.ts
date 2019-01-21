import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Song } from '../interfaces/Song';
import { PlaylistService } from './playlist.service';

@Injectable({
    providedIn: 'root'
})

export class SearchService {

    searchPlaylist: ReplaySubject<Song[]> = new ReplaySubject()

    constructor(
        private http: HttpClient,
        private playlistService: PlaylistService
    ) {}

    getSearchSong(song: string): Observable<Song[]> {
        return this.http.get<Song[]>('http://localhost:5000/api/search/songs', {params: {song}})
    }

    setSearchPlaylist(playlist: Song[]) {
        this.searchPlaylist.next(playlist)
        this.playlistService.setCurrentPlaylist('searchPlaylist')
    }

    getSearchPlaylist(): Observable<Song[]> {
        return this.searchPlaylist.asObservable()
    }
}