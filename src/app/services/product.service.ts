import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product$ = new BehaviorSubject<any>({});
  selectedProduct$ = this.product$.asObservable();

  constructor() { }

setProduct(product: products) {
  this.product$.next(product);
}
}
