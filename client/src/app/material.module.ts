import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatSliderModule,
        MatToolbarModule,
        MatChipsModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatSliderModule,
        MatToolbarModule,
        MatChipsModule,
        MatButtonModule
    ]
})

export class MaterialModule {}