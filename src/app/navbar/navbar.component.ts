import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ShoppingCarService } from 'app/shared/shopping-car/shopping-car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              private shoppingCarService: ShoppingCarService) {
  }

  ngOnInit() {
  }

  getQuantityProductsCar() {
    return this.shoppingCarService.getQuantityProductsCar();
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
