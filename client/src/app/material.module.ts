import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatSliderModule,
        MatToolbarModule
    ],
    exports: [
        MatIconModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatSliderModule,
        MatToolbarModule
    ]
})

export class MaterialModule {}