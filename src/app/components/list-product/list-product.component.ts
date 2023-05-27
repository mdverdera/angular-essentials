import { Component, EventEmitter, Input, Output } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  @Input() productList: products[] = [];

  @Output() onSelected = new EventEmitter<products>();
  ngOnInit() {}

  onSelectedProduct(product: products) {
    console.log(product);
    this.onSelected.emit(product);
  }
}
