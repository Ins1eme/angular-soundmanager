import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})

export class iconService {

    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {}

    initIcons() {
        const icons: string[] = ['logo', 'profile', 'cd', 'favourites', 'search', 'settings', 'play', 'pause', 'next', 'volume', 'play-circular', 'share', 'refresh-dot', 'heart', 'show-more']
        for(let icon of icons) {
            this.matIconRegistry.addSvgIcon(
                icon, 
                this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/svg/${icon}.svg`))
        }
    }
}