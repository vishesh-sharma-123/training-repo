import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';


const routes: Routes =[ 
  {path: '', component: DemoComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    //component, directive, pipe
    RouterModule,
  ],
})
export class AppRoutingModule { }
