import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomePageComponent } from './home-page/home-page.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { MaterialModule } from "../material.module";
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
    declarations: [
        HomePageComponent, 
        FavouritesPageComponent, 
        SearchPageComponent, 
        SettingsPageComponent, 
        AuthorDetailsComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule
    ]
})

export class PagesModule {}