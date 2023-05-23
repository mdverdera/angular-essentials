import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-essentials';
  items = ['Apples','Bananas','Cherries'];

  onAdd(newItem: string) {
    console.log('Add clicked');
    this.items.push(newItem);
    console.log(this.items);
  }
}
