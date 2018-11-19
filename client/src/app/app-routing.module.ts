import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [
    { path: '', component:  HomePageComponent},
    { path: 'favourites', component:  FavouritesPageComponent},
    { path: 'search', component:  SearchPageComponent},
    { path: 'settings', component:  SettingsPageComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
