import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PersonalDetailsFormConfig } from './personal-details.config';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicComponentResolver } from '@dynamic-forms-poc/dynamic-forms';
import { DynamicControl } from '@dynamic-forms-poc/infrastructure/interfaces';
@Component({
  selector: 'dynamic-forms-poc-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalDetailsComponent implements OnInit {
  formConfig = PersonalDetailsFormConfig();
  form!: FormGroup;

  constructor(public dynamicComponentResolver: DynamicComponentResolver) {}

  ngOnInit(): void {
    this.createForm();
  }

  buildGroup(config: DynamicControl, form: FormGroup) {
    if (!config.controls) return;
    const nestedFormGroup = new FormGroup({});
    const nestedFormConfig = config.controls;

    Object.keys(nestedFormConfig).forEach((key) => {
      const config = nestedFormConfig[key];
      this.buildControl(config, nestedFormGroup);
    });

    form.addControl(config.name, nestedFormGroup);
    nestedFormGroup.setParent(form);
  }

  buildControl(config: DynamicControl, form: FormGroup) {
    if (config.controlType === 'group') {
      this.buildGroup(config, form);
      return;
    } else {
      form.addControl(
        config.name,
        new FormControl(
          config.defaultValue,
          config.validators ? config.validators : []
        )
      );
    }
  }

  createForm() {
    this.form = new FormGroup({});
    Object.keys(this.formConfig).forEach((key) => {
      const config = this.formConfig[key];
      this.buildControl(config, this.form);
    });
    console.log(this.form);
  }

  onSubmit() {
    console.log(this.form);
  }
}
