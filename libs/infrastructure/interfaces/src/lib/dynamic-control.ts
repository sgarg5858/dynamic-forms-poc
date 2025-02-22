import { ValidatorFn } from '@angular/forms';

export interface DynamicOption<T = string > {
  value: T;
  label: string;
}

export interface DynamicControl<T = string | boolean | number> {
  name: string;
  controlType: 'input' | 'select' | 'checkbox';
  type?: string;
  defaultValue: T | null;
  label: string;
  options?: DynamicOption<T>[];
  validators?: ValidatorFn[];
}
