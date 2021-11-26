/* Implement the class Pricing
   with attributes amount and currency
   implement a getter and setter for each attribute
   implement a method displayFullPrice */
import Currency from './3-currency';

export default class Currency {
  constructor(amount, currency) {
  // creates objects using this
    this._amount = amount;
    this._currency = currency;
  }

  // implement the method displayFullPrice
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this.currency.code}`;
  }

  // getter for amount object
  get amount() {
    return this._amount;
  }

  // setter for amount
  set amount(amount_value) {
    if (typeof amount_value === 'number') this._amount = amount_value;
  }

  // getter for currency object
  get currency() {
    return this._currency;
  }

  set currency(currency_value) {
    if (currency_value instanceof Currency) this._currency = currency_value;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
