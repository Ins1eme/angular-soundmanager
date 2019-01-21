import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';
import { Song } from 'src/app/core/interfaces/Song';
import { PlaylistService } from 'src/app/core/services/playlist.service';
import { StyleModeService } from 'src/app/core/services/style-mode.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  searchForm: FormGroup
  songs: Song[]
  userPlaylist: Song[]
  styleMode: boolean
  destroy$: Subject<boolean> = new Subject()

  constructor(
    private searchService: SearchService,
    private playlistService: PlaylistService,
    private styleModeService: StyleModeService
  ) { }

  ngOnInit() {
    this.styleModeService.getStyleMode()
      .pipe(takeUntil(this.destroy$))
      .subscribe(styleMode => {
        this.styleMode = styleMode
      })
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

  ngOnDestroy() {
    this.destroy$.next(true)
  }

}
