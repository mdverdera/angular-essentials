import { Component, Input } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  @Input() productList: products[] = [];
  ngOnInit() {}
}
