import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 @Input() items: string[] = [];
 @Output() addItem = new EventEmitter<string>();

  newItem: string = '';


 constructor() {}

 ngOnInit(): void {
   
 }

 onAddItem() {
  this.addItem.emit(this.newItem);
 }
}
