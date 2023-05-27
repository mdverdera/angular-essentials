import { Component, ViewChild } from '@angular/core';
import { products } from './model/products';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ListProductComponent) productList: any;
  sessionId: any;

  title = 'angular-essentials';
  items = ['Apples','Bananas','Cherries'];

  selectedProduct: any;
  products = [
    {name: 'Rice', id:1, price:200},
    {name: 'Beans', id:2, price:300},
    {name: 'Banana', id:3, price:400},
  ]

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe((value) => {
      this.selectedProduct = value;
    });

    this.productService.setProductList(this.products);
  }

  ngAfterViewInit() {
    this.sessionId = this.productList.sessionId;
  }

  onAdd(newItem: string) {
    console.log('Add clicked');
    this.items.push(newItem);
    console.log(this.items);
  }

  onSelectedProduct(product: products) {
    this.selectedProduct = product;
  }
}
