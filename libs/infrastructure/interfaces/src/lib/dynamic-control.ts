import { ValidatorFn } from '@angular/forms';
import { DynamicFormConfig } from './dynamic-form-config';

export interface DynamicOption<T = string > {
  label: string;
  value: T;
}

export interface DynamicControl<T = string | boolean | number > {
  name: string;
  label: string;
  defaultValue: T | null;
  controlType: 'input' | 'select' | 'checkbox' | 'group';
  type?: string;
  options?: DynamicOption<T>[];
  validators?: ValidatorFn[];
  controls?:DynamicFormConfig;
}
