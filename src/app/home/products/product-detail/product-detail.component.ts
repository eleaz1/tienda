import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'app/shared/product/product';
import { ProductService } from 'app/shared/product/product.service';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: FirebaseObjectObservable<Product>;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProductByKey(params['id']))
      .subscribe(data => this.product = data);
  }

}
