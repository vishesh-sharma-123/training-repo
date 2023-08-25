import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  restrictNumbersOnly(event: KeyboardEvent){
    if(event.keyCode<48 || event.keyCode >57){
      event.preventDefault();
    }
  }

}
