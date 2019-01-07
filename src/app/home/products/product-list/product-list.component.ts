import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product/product.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Product } from 'app/shared/product/product';
import { Router } from '@angular/router';
import { ShoppingCarService } from '../../../shared/shopping-car/shopping-car.service';
import { ShoppingCar } from 'app/shared/shopping-car/shopping-car';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: FirebaseListObservable<Product[]>;
  public filter = '';

  constructor(private productService: ProductService,
    private router: Router,
    private shoppingCarService: ShoppingCarService) {
  }

  ngOnInit() {
    this.productsList = this.productService.getProducts();
  }

  addProductToShoppingCar(product: Product, quantity: number) {
    const shoppingCar = new ShoppingCar({
      'product': product,
      'quantity': quantity
    });
    this.shoppingCarService.addProductToShoppingCar(shoppingCar);
  }

}
