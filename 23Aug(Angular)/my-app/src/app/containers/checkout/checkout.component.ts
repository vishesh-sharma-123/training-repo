import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
 checkoutForm: FormGroup = new FormGroup(
  {
  name: new FormControl(null, [Validators.required]),
  email: new FormControl('test@mail.com', {
    updateOn: 'change',
    validators: [Validators.required]})
 ,
 address: new FormGroup({
  city: new FormControl(),
  pincode: new FormControl()
 })
},
 {updateOn: 'submit'}
);

 saveData(){
  if(this.checkoutForm.valid){
    console.log('form submitted', this.checkoutForm.value);
  }
 }
}

