import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from "../material.module";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PlayerComponent } from './components/player/player.component';
import { RouterModule } from "@angular/router";
import { SiteLayoutComponent } from "./layouts/site-layout/site-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        PlayerComponent,
        SiteLayoutComponent,
        AuthLayoutComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        MaterialModule,
        HeaderComponent,
        SideNavComponent,
        PlayerComponent,
        SiteLayoutComponent,
        AuthLayoutComponent
    ]
})

export class CoreModule {}