import { Injectable } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

export interface ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorStateMatcher implements ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ) {
    return Boolean(
      control && control.errors && (control.dirty || (form && form.submitted))
    );
  }
}

export class onTouchedErrorStateMatcher implements ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ) {
    return Boolean(
      control && control.errors && (control.touched || (form && form.submitted))
    );
  }
}

export class onSubmitErrorStateMatcher implements ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ) {
    return Boolean(control && control.errors && form && form.submitted);
  }
}
