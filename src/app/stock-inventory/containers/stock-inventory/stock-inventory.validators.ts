import { AbstractControl } from '@angular/forms';

// custom validator
export class StockValidators {
  static checkBranch(control: AbstractControl) { // typeScript AbstractControl for the control comes from formControl validation array ['', [StockValidators.checkBranch]] // custom validator
    const regexp = /^[a-z]\d{3}$/i;//start with any latter from a to z and followed by 3 digit and $ means end and i is for case insensitivity //A123
    const valid = regexp.test(control.value); //check control value infact is valid or not
    return valid ? null : { invalidBranch: true }; //if valid then return null otherwise return invalidBranch and use it in the stock-branch for error
  }
}