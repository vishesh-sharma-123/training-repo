import { Component, DestroyRef, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent {
  currency!: string;
  plist: ProductType[] = [];
  currency$!: Subscription;
  destroyRef = inject(DestroyRef);
  curr$: Observable<string>;
  product$: Observable<ProductType[]>
  
  constructor(
    private productService: ProductService, 
    private currencyService: CurrencyService, 
    private router: Router
    ){ 
      this.curr$= this.currencyService.currencyObservable;
      this.product$ = this.productService.getProducts();
     }
     

  ngOnInit(): void {
    // this.getData();
    
    this.currencyService.currencyObservable
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((code)=>(this.currency= code))
  }

  ngOnDestroy():void{

  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  // getData(){
  //   this.productService.getProducts().subscribe(
  //     (data)=>{
  //       console.log('success', data)
  //       this.plist=data;
  //     },
  //     (err) =>{
  //       console.log('error', err)
  //     }
  //   )
  // }

  updatePrice(){
    const product= this.plist[0];
    product.productSalePrice = 950;
    this.plist= [{...product}, this.plist[1]]
  }

addItem(data:any){
  console.log('added', data);
  this.router.navigateByUrl('/cart')
  
}


}
