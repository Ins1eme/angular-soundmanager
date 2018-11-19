import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from "../material.module";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SideNavComponent,
        PlayerComponent,
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        MaterialModule,
        HeaderComponent,
        SideNavComponent,
        PlayerComponent
    ]
})

export class CoreModule {}