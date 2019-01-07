export class Product {

    $key: any;
    name: string;
    quantity: number;
    price: number;
    image: any;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
