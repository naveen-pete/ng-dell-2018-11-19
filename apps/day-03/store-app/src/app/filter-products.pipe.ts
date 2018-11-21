import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'filterProducts',
  pure: false
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], searchText: string): Product[] {
    if (searchText === '') {
      return products;
    }

    const filteredProducts: Product[] = products.filter(p => p.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);

    return filteredProducts;
  }

}
