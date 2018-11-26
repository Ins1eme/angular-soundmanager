import { Injectable } from '@angular/core';
import { Song } from '../interfaces/Song';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlaylistService {


    currentPlaylist: Subject<string> = new Subject()
    currentSong: Subject<Song> = new Subject()


    constructor(
        private http: HttpClient
    ) {}

    setCurrentPlaylist(playlistName: string) {
        this.currentPlaylist.next(playlistName)
    }

    getCurrentPlaylist(): Observable<string> {
        return this.currentPlaylist.asObservable()
    }

    setCurrentSong(song: Song) {
        this.currentSong.next(song)
    }

    getCurrentSong(): Observable<Song> {
        return this.currentSong.asObservable()
    }

    getCurrentPlaylistByAuthorName(name: string): Observable<Song[]> {
        return this.http.get<Song[]>('http://localhost:5000/api/music/playlist', {params: {name}})
    }
    
}