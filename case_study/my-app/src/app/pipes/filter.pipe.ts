import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from 'src/types';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: ProductType[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) =>
      item.productName.toLowerCase().includes(searchText)
    );
  }

}
