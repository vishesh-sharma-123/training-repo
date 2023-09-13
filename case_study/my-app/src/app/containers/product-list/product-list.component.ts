// import { Component, DestroyRef, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';
// import { CurrencyService } from 'src/app/services/currency.service';
// import { ProductService } from 'src/app/services/product.service';
// import { ProductType } from 'src/types';
// import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { takeUntil } from 'rxjs';
// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css'],
//   providers: [ProductService],
// })
// export class ProductListComponent {
//   currency!: string;
//   plist: ProductType[] = [];
//   currency$!: Subscription;
//   destroyRef = inject(DestroyRef);
//   curr$: Observable<string>;
//   product$: Observable<ProductType[]>
//   searchQuery: string = ''; // Add this property to hold the search query
//   filteredProducts: ProductType[] = []; // Add this property to store filtered products

  
//   constructor(
//     private productService: ProductService, 
//     private currencyService: CurrencyService, 
//     private router: Router,
//     private route: ActivatedRoute
//     ){ 
//       this.curr$= this.currencyService.currencyObservable;
//       this.product$ = this.productService.getProducts();
//      }
     

//   ngOnInit(): void {
//     // this.getData();
    
//     this.currencyService.currencyObservable
//     .pipe(takeUntil(this.route.snapshot.paramMap)) // Unsubscribe when the route changes
//     .subscribe((code) => (this.currency = code));

//     this.route.queryParams
//     .pipe(takeUntil(this.route.snapshot.paramMap))
//     .subscribe((queryParams) => {
//       this.searchQuery = queryParams.search || ''; // Get the search query from the URL
//       this.searchProducts();
//     });
//   }

//   ngOnDestroy():void{
    
//   }

//    // Function to update the URL and trigger the search
//    updateUrlAndSearch() {
//     this.router.navigate([], {
//       relativeTo: this.route,
//       queryParams: { search: this.searchQuery }, // Update the URL with the search query
//       queryParamsHandling: 'merge', // Merge with existing query parameters
//     });
//   }
//   // ngOnChanges(changes: SimpleChanges): void {
//   //   console.log(changes);
//   // }

//   // getData(){
//   //   this.productService.getProducts().subscribe(
//   //     (data)=>{
//   //       console.log('success', data)
//   //       this.plist=data;
//   //     },
//   //     (err) =>{
//   //       console.log('error', err)
//   //     }
//   //   )
//   // }

//   updatePrice(){
//     const product= this.plist[0];
//     product.productSalePrice = 950;
//     this.plist= [{...product}, this.plist[1]]
//   }

// addItem(data:any){
//   console.log('added', data);
//   this.router.navigateByUrl('/cart')
  
// }

// searchProducts() {
//   this.product$
//     .pipe(takeUntil(this.route.snapshot.paramMap))
//     .subscribe((products) => {
//       if (this.searchQuery.trim() === '') {
//         // If the search query is empty, display all products
//         this.filteredProducts = products;
//       } else {
//         // Filter products based on the search query
//         this.filteredProducts = products.filter((product) =>
//           product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
//         );
//       }
//     });
// }

// }


import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType, Cart } from 'src/types';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, OnDestroy {
  currency!: string;
  plist: ProductType[] = [];
  currency$!: Observable<string>;
  curr$: Observable<string>;
  product$: Observable<ProductType[]>;
  searchQuery: string = ''; 
  filteredProducts: ProductType[] = []; 
  destroy$: Subject<void> = new Subject<void>(); 
  currentPage: number = 1;
  itemsPerPage: number = 20;
  size: number = 5;
  currentPageProducts: ProductType[] = [];
  
  getNumbersArray(size: number): number[] {
    return Array.from({ length: size }, (_, index) => index + 1);
  }


  constructor(
    private productService: ProductService,
    private currencyService: CurrencyService,
    private router: Router,
    private route: ActivatedRoute
    
  ) {
    this.curr$ = this.currencyService.currencyObservable;
    this.product$ = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.currencyService.currencyObservable
    .pipe(takeUntil(this.destroy$))
    .subscribe((code) => (this.currency = code));

  this.route.queryParams
    .pipe(takeUntil(this.destroy$))
    .subscribe((queryParams: any) => { // Type queryParams as 'any'
      this.searchQuery = queryParams.search || ''; // Get the search query from the URl
      this.currentPage = +queryParams.page || 1;
      this.searchProducts();
      
    }); 
   }

  ngOnDestroy(): void {
    // Complete the destroy$ Subject when the component is destroyed
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Function to update the URL and trigger the search
  updateUrlAndSearch() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchQuery }, // Update the URL with the search query
      queryParamsHandling: 'merge', // Merge with existing query parameters
    });
  }

  updatePrice() {
    const product = this.plist[0];
    product.productSalePrice = 950;
    this.plist = [{ ...product }, this.plist[1]];
  }

  addItem(data: ProductType) {
   
    if (!data || !data.productId || !data.productName) {
      return; 
    }
  
 
    const newItem: Cart = {
      count: 1,
      product: data
    };
  console.log(newItem);
    let existingCartItems: Cart[] = [];
  
   
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    if (cartItemsFromStorage) {
      try {
        existingCartItems = JSON.parse(cartItemsFromStorage);
        if (!Array.isArray(existingCartItems)) {
          existingCartItems = [];
        }
      } catch (error) {
        console.log(error);
        existingCartItems = [];
      }
    }
  
    const existingItemIndex = existingCartItems.findIndex((order: Cart) => order.product.productId === newItem.product.productId);
  console.log("existing item", existingItemIndex)
    if (existingItemIndex !== -1) {
      existingCartItems[existingItemIndex].count++;
    } else {
      existingCartItems.push(newItem);
    }
  
   
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  

  }

  searchProducts() {
    // this.product$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((products) => {
    //     if (this.searchQuery.trim() === '') {
    //     
    //       this.filteredProducts = products;
    //     } else {
  
    //       this.filteredProducts = products.filter((product) =>
    //         product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
    //       );
    //     }
    //   });
    this.product$
    .pipe(takeUntil(this.destroy$))
    .subscribe((products) => {
      if (this.searchQuery.trim() === '') {
      
        this.filteredProducts = products;
      } else {
       
        this.filteredProducts = products.filter((product) =>
          product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

     
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;

     
      this.filteredProducts = this.filteredProducts.slice(startIndex, endIndex);
    });
  }

  sortByNameAsc() {
    this.filteredProducts.sort((a, b) => {
      const nameA = a.productName.toLowerCase();
      const nameB = b.productName.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }

  sortByPriceAsc() {
    this.filteredProducts.sort((a, b) => {
      return a.productPrice - b.productPrice;
    });
  }

  RemoveSort(){
    this.searchProducts()
  }



  pagination(page: number) {

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page, search: this.searchQuery },
      queryParamsHandling: 'merge',
    });

  }

}
