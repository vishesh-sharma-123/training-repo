import { Component } from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  plist: ProductType[] = [{
    productId: 12,
    productName: 'Groot',
    productImage: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/11/1489667130-baby-groot-switches-guardians-of-the-galaxy-vol-2.jpg?crop=1xw:0.9907952871870398xh;center,top&resize=1200:*',
    productPrice: 300.255,
    productStock: 121,
    productSalePrice: 112
  },
  {
    productId: 2,
    productName: 'Rocket Racoon',
    productImage: 'https://wallpapers.com/images/hd/funny-marvel-pictures-w535ke8c04clwsz9.jpg',
    productPrice: 500.345,
    productStock: 0,
    productSalePrice: 250
  }
]


addItem(data:any){
  console.log('added', data);
}

}
