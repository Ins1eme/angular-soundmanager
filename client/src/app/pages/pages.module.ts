import { NgModule } from "@angular/core";
import { HomePageComponent } from './home-page/home-page.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
    declarations: [HomePageComponent, FavouritesPageComponent, SearchPageComponent, SettingsPageComponent],
    imports: []
})

export class PagesModule {}