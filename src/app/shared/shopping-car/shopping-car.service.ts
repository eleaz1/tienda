import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Subject } from 'rxjs/Subject';
import { ShoppingCar } from 'app/shared/shopping-car/shopping-car';
import { ProductService } from 'app/shared/product/product.service';

@Injectable()
export class ShoppingCarService {
  // public addItemToShoppingCar = new Subject<any>();

  shoppingCarList: ShoppingCar[] = [];

  // addItemToShoppingCar$ = this.addItemToShoppingCar.asObservable();

  constructor(private productService: ProductService) {
    // this.addItemToShoppingCar.next(item);
  }

  getShoppingCarList() {
    return this.shoppingCarList;
  }

  addProductToShoppingCar(shoppinCar: ShoppingCar) {
    this.shoppingCarList.push(shoppinCar);
  }

  getQuantityProductsCar() {
    let quantity = 0;
    for (let shoppingCar of this.shoppingCarList) {
      quantity += shoppingCar.quantity;
    }
    return quantity;
  }

  getTotalShoppingCar() {
    let total = 0;
    for (let shoppingCar of this.shoppingCarList) {
      total += shoppingCar.product.price * shoppingCar.quantity;
    }
    return total;
  }

  toPay() {
    for (let shoppingCar of this.shoppingCarList) {
      shoppingCar.product.quantity -= shoppingCar.quantity;
      this.productService.updateProduct(shoppingCar.product);
    }
    this.shoppingCarList = [];
  }

}
