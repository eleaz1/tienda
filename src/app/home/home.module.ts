import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductService } from 'app/shared/product/product.service';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from '../shared/filter-products.pipe';
import { ShoppingCarService } from '../shared/shopping-car/shopping-car.service';
import { ShoppingCarDetailComponent } from './shopping-car-detail/shopping-car-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailComponent,
    FilterProductsPipe,
    ShoppingCarDetailComponent
  ],
  providers: [ ProductService, ShoppingCarService ]
})
export class HomeModule { }
