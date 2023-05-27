import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-essentials';
  items = ['Apples','Bananas','Cherries'];

  products = [
    {name: 'Rice', id:1, price:200},
    {name: 'Beans', id:2, price:300},
    {name: 'Banana', id:3, price:400},
  ]
  onAdd(newItem: string) {
    console.log('Add clicked');
    this.items.push(newItem);
    console.log(this.items);
  }
}
