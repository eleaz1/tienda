import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ShoppingCarDetailComponent } from 'app/home/shopping-car-detail/shopping-car-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'product/detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'shopping-car',
        component: ShoppingCarDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
