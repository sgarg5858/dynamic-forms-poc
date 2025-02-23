import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { DynamicCheckboxComponent } from './components/dynamic-checkbox/dynamic-checkbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicCheckboxComponent,
  ],
})
export class DynamicFormsModule {}
