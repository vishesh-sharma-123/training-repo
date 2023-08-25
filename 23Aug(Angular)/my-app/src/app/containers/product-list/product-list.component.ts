import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnChanges, OnInit{
  @Input() currency!: string;
  plist: ProductType[] = [];

  constructor(private productService: ProductService ){  }
  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  getData(){
    this.productService.getProducts().subscribe(
      (data)=>{
        console.log('success', data)
        this.plist=data;
      },
      (err) =>{
        console.log('error', err)
      }
    )
  }

  updatePrice(){
    const product= this.plist[0];
    product.productSalePrice = 950;
    this.plist= [{...product}, this.plist[1]]
  }

addItem(data:any){
  console.log('added', data);
  
}


}
