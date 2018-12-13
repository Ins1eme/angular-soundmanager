import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';
import { Song } from 'src/app/core/interfaces/Song';
import { PlaylistService } from 'src/app/core/services/playlist.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {

  searchForm: FormGroup
  songs: Song[]
  userPlaylist: Song[]

  constructor(
    private searchService: SearchService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null)
    })
    this.playlistService.getUserPlaylist().subscribe((playlist: Song[]) => {
      this.userPlaylist = playlist
    })
  }

  onSubmit() {
    this.searchService.getSearchSong(this.searchForm.value.search).subscribe(data => {
      this.songs = data
      this.searchService.setSearchPlaylist(data)
    })
  }

}
