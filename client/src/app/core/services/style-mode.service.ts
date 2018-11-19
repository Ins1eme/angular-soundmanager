import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StyleModeService {
    
    styleMode: BehaviorSubject<boolean> = new BehaviorSubject(false)

    changeStyleMode(styleMode: boolean) {
        this.styleMode.next(styleMode)
        localStorage.setItem('styleMode', JSON.stringify(styleMode))
    }

    getStyleMode() {
        const styleMode = localStorage.getItem('styleMode')
        this.styleMode.next(JSON.parse(styleMode))
        return this.styleMode.asObservable()
        
    }

}