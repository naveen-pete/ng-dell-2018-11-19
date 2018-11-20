import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  showMessage = false;
  product: Product = new Product();

  products: Product[] = [
    {
      id: 1,
      name: 'Dell Latitude',
      price: 50000,
      description: 'A laptop for daily use',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Dell Inspiron',
      price: 40000,
      description: 'A laptop for business use',
      isAvailable: true
    },
    {
      id: 3,
      name: 'Dell XPS',
      price: 70000,
      description: 'A laptop for gaming',
      isAvailable: false
    },
  ];

  onSubmit() {
    console.log('New product saved successfully!');
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    // const obj = this;

    // Traditional JS function
    // setTimeout(function() {
    //   obj.showMessage = false;
    //   console.log('showMessage has been reset to false');
    //   console.log(this);
    // }, 3000);

    // Arrow function
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
