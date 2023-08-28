import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject<string>(this._code);

  currencyObservable: Observable<string> = this.currencySubject.asObservable();

  constructor() {this.rehydrate() }

  rehydrate(){
    if(localStorage.getItem('currency')){
      this._code = localStorage.getItem('currency') as string;
      this.currencySubject.next(this._code);
    }
  }

  updateCurrency(code: string) {
    this._code = code;
    this.persistNnotifyData();
  }
  persistNnotifyData() {
    localStorage.setItem('currency', this._code);
    // on every data change, we should give a notification
    this.currencySubject.next(this._code);
  }
}
