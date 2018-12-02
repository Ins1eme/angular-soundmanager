import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/classes/auth.guard';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AuthorDetailsComponent } from './pages/author-details/author-details.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './core/layouts/site-layout/site-layout.component';

const routes: Routes = [
    {
        path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
            { path: '', redirectTo: 'authors', pathMatch: 'full'},
            { path: 'authors', component:  HomePageComponent, },
            { path: 'authors/:id', component: AuthorDetailsComponent},
            { path: 'favourites', component: FavouritesPageComponent},
            { path: 'search', component: SearchPageComponent},
            { path: 'settings', component: SettingsPageComponent}
        ]
    },
    {
        path: '', component: AuthLayoutComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginPageComponent},
            { path: 'register', component: RegisterPageComponent }
        ]
    }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
