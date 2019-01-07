import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
// Observable operators
import 'rxjs/add/operator/map';
import { Product } from 'app/shared/product/product';

@Injectable()
export class ProductService {

  productsList: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.productsList = this.db.list('products');
  }

  getProducts() {
    return this.productsList;
  }

  getProductByKey(key: string) {
    return this.db.object('products/' + key);
  }

  updateProduct(product: Product) {
    this.productsList.update(product.$key, product)
      .then(res => console.log('update!'));
  }

}
