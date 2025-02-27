import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PersonalDetailsFormConfig } from './personal-details.config';
import { FormGroup } from '@angular/forms';
import { DynamicComponentResolver } from '@dynamic-forms-poc/dynamic-forms';
import {
  ErrorStateMatcher,
  onSubmitErrorStateMatcher,
} from '@dynamic-forms-poc/input-errors';
@Component({
  selector: 'dynamic-forms-poc-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: ErrorStateMatcher, useClass: onSubmitErrorStateMatcher },
  ],
})
export class PersonalDetailsComponent implements OnInit {
  formConfig = PersonalDetailsFormConfig();
  form!: FormGroup;

  constructor(public dynamicComponentResolver: DynamicComponentResolver) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({});
  }
  onSubmit() {
    console.log(this.form);
  }
}
