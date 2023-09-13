import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductType } from 'src/types';
import { map } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const url =
      'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.http.get<ProductType[]>(url);
  }

  getFilteredProducts(inputString : string) {
    // const url =
    //   'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.getProducts().pipe(
      map((products: ProductType[]) =>
        products.filter((product:ProductType) =>
          product.productName.toLowerCase().includes(inputString.toLowerCase())
        )
      )
    )
  }
}
