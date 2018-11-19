import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StyleModeService {
    
    styleMode: BehaviorSubject<boolean> = new BehaviorSubject(false)

    changeStyleMode(styleMode: boolean) {
        this.styleMode.next(styleMode)
    }

    getStyleMode() {
        return this.styleMode.asObservable()
    }

}