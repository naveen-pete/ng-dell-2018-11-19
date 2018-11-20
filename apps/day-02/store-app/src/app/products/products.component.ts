import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  showMessage: boolean = false;
  product: Product = new Product();

  products: Product[] = [
    {
      name: 'Dell Latitude',
      price: 50000,
      description: 'A laptop for daily use',
      isAvailable: true
    },
    {
      name: 'Dell Inspiron',
      price: 40000,
      description: 'A laptop for business use',
      isAvailable: true
    },
    {
      name: 'Dell XPS',
      price: 70000,
      description: 'A laptop for gaming',
      isAvailable: false
    },

  ];

  onSave() {
    console.log('Product Saved!');
    console.log(this.product);
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    // const obj = this;

    // setTimeout(function() {
    //   obj.showMessage = false;
    //   console.log('showMessage has been reset to false');
    //   console.log(this);
    // }, 3000);

    setTimeout(() => {
      this.showMessage = false;
      console.log('showMessage has been reset to false');
      console.log(this);
    }, 3000);
  }
}
