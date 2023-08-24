import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
 checkoutForm: FormGroup = new FormGroup(
  {

  name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  email: new FormControl('test@mail.com', {
    updateOn: 'change',
    validators: [Validators.required]})
 ,
 address: new FormGroup({
  city: new FormControl(),
  pincode: new FormControl(null, [this.zipcodeValidator()])
 })
},
 {updateOn: 'submit'}
);

zipcodeValidator(){
  return (control: AbstractControl) =>{
    if(control.value == 123456)
      return null;
    return{
      zipcode:{
        validCode: 123456,
        enteredCode : control.value,
      }
    }
  }
}

 saveData(){
  if(this.checkoutForm.valid){
    console.log('form submitted', this.checkoutForm.value);
  }
 }


 loadData(){
  const data={
name:'Sample',
email:'22@gmail.com',
address: {
  city:'lucknow',
  pincode: '126001'
}
  }
  this.checkoutForm.setValue(data);
 }

 patchData(){
  const data = {name:'mike', email: 'sample@mail.com'}
  this.checkoutForm.patchValue(data);
 }
}

