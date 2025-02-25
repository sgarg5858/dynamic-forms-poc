import { Injectable, Type } from '@angular/core';
import { DynamicInputComponent } from '../components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../components/dynamic-select/dynamic-select.component';
import { DynamicCheckboxComponent } from '../components/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicControl } from '@dynamic-forms-poc/infrastructure/interfaces';
import { DynamicGroupComponent } from '../components/dynamic-group/dynamic-group.component';
type DynamicControlMap = {
  [key in DynamicControl['controlType']]: Type<unknown>;
};

@Injectable({
  providedIn: 'root',
})
export class DynamicComponentResolver {
  private dynamicComponents: DynamicControlMap = {
    input: DynamicInputComponent,
    select: DynamicSelectComponent,
    checkbox: DynamicCheckboxComponent,
    'group': DynamicGroupComponent
  };

  resolve(controlType: DynamicControl['controlType']):Type<unknown> {
    return this.dynamicComponents[controlType];
  }
}
