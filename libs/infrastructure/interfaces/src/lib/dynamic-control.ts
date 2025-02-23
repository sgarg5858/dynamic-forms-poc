import { ValidatorFn } from '@angular/forms';

export interface DynamicOption<T = string > {
  label: string;
  value: T;
}

export interface DynamicControl<T = string | boolean | number > {
  name: string;
  label: string;
  defaultValue: T | null;
  controlType: 'input' | 'select' | 'checkbox';
  type?: string;
  options?: DynamicOption<T>[];
  validators?: ValidatorFn[];
}
