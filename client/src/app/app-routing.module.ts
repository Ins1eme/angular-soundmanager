import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AuthorsDetailsComponent } from './pages/authors-details/authors-details.component';

const routes: Routes = [
    { path: '', redirectTo:'authors', pathMatch: 'full'},
    { path: 'authors', component:  HomePageComponent},
    { path: 'authors/:id', component:  AuthorsDetailsComponent},
    { path: 'favourites', component:  FavouritesPageComponent},
    { path: 'search', component:  SearchPageComponent},
    { path: 'settings', component:  SettingsPageComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
