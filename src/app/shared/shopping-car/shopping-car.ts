import { Product } from "app/shared/product/product";

export class ShoppingCar {

    product: Product;
    quantity: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
