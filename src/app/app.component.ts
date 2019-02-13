import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ChecklistDataService } from '../app/services/checklist-data.service';

const { SplashScreen, StatusBar } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private dataService: ChecklistDataService) {
    this.initializeApp();
  }

  initializeApp() {
    this.dataService.load();

    SplashScreen.hide().catch((err) => {
      console.warn(err);
    });
    StatusBar.hide().catch((err) => {
      console.warn(err);
    });
  }
}
