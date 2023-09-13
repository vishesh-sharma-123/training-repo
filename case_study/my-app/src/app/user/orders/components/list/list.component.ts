import { Component } from '@angular/core';
import { Cart } from 'src/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  item: Cart[] =  JSON.parse(localStorage.getItem('cartItems') || '[]');

  // get item(): Cart[] {
  //   return JSON.parse(localStorage.getItem('cartItems') || '[]');
  // }

  updateCartItems(data: Cart){
    const index = this.item.findIndex((items) => items.product.productId === data.product.productId);
      if(index !== -1){
        this.item[index].count++;
        localStorage.setItem('cartItems',  JSON.stringify(this.item))
      }
  }

  removeItem(data: Cart){
    const index = this.item.findIndex((items) => items.product.productId === data.product.productId);
      if(index !== -1){
        this.item.splice(index, 1);
        localStorage.setItem('cartItems',  JSON.stringify(this.item))
      }
  }
}
