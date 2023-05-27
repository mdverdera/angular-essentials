import { Component, EventEmitter, Input, Output } from '@angular/core';
import { products } from 'src/app/model/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  sessionId = 12345;

  @Input() productList: products[] = [];

  @Output() onSelected = new EventEmitter<products>();

  constructor(private productService: ProductService) {}

  onSelectedProduct(product: products) {
    // console.log(product);
    // this.onSelected.emit(product);
    this.productService.setProduct(product);
  }
}
