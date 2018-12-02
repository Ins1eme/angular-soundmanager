import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomePageComponent } from './home-page/home-page.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { AudioComponent } from "./author-details/audio/audio.component";

@NgModule({
    declarations: [
        HomePageComponent, 
        FavouritesPageComponent, 
        SearchPageComponent, 
        SettingsPageComponent, 
        AuthorDetailsComponent,
        LoginPageComponent,
        RegisterPageComponent,
        AudioComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ]
})

export class PagesModule {}