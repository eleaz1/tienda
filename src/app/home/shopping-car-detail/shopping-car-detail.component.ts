import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from 'app/shared/shopping-car/shopping-car.service';
import { ShoppingCar } from 'app/shared/shopping-car/shopping-car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-car-detail',
  templateUrl: './shopping-car-detail.component.html',
  styleUrls: ['./shopping-car-detail.component.css']
})
export class ShoppingCarDetailComponent implements OnInit {

  shoppingCarList: ShoppingCar[] = [];

  constructor(private shoppingCarService: ShoppingCarService,
    private router: Router) { }

  ngOnInit() {
    this.shoppingCarList = this.shoppingCarService.getShoppingCarList();
  }

  getTotalShoppingCar() {
    return this.shoppingCarService.getTotalShoppingCar();
  }

  toPay() {
    this.shoppingCarService.toPay();
    this.router.navigate(['/home']);
  }
}
