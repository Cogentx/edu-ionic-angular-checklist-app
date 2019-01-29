import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  addChecklist() {
    console.log('addChecklist called');
  }

  renameChecklist(checklist) {}

  removeChecklist(checklist) {}

}
