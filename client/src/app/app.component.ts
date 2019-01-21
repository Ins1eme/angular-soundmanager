import { Component } from '@angular/core';
import { iconService } from './core/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(
      private iconService: iconService
    ) {
      this.iconService.initIcons()
    }

}
