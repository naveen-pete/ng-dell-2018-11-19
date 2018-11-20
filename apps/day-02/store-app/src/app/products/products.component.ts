import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
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

  onSaveClick(e) {
    console.log('Product Saved!');

    console.log(e);
  }
}
