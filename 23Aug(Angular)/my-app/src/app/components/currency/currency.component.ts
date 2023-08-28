import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  codes=['INR', 'USD', 'EUR', 'GBP'];
  // @Output() currencySelected = new EventEmitter();
  constructor(private currencyService: CurrencyService){}

  getSelectedCode(event: Event){
    const ele = event.target as HTMLSelectElement;
    // this.currencySelected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value)
  }
}
