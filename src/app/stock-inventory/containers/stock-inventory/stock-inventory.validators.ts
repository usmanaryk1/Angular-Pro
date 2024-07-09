import { AbstractControl } from '@angular/forms';

// custom validator for patern
export class StockValidators {
  static checkBranch(control: AbstractControl) { // typeScript AbstractControl for the control comes from formControl validation array ['', [StockValidators.checkBranch]] // custom validator
    const regexp = /^[a-z]\d{3}$/i;//start with any latter from a to z and followed by 3 digit and $ means end and i is for case insensitivity //A123
    const valid = regexp.test(control.value); //check control value infact is valid or not
    return valid ? null : { invalidBranch: true }; //if valid then return null otherwise return invalidBranch and use it in the stock-branch for error
  }

  //check weather product is already exist in cart
  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock'); // get the stock formGroup
    const selector = control.get('selector'); // get the selector formGroup

    if (!(stockItem && selector)) return null; // check both is exist stockItem && selector

    const exists = stockItem.value.some((stock:any) => { // some return boolean and stock come from stockItem item if any
      return stock.product_id === parseInt(selector.value.product_id, 10); // stock id is equal to selector id then return true down 
    });

    return exists ? { stockExists: true } : null; // ifalready exist then send object with true property otherwise null

  }

}