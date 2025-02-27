import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { DynamicCheckboxComponent } from './components/dynamic-checkbox/dynamic-checkbox.component';
import { ControlConfigInjectorPipe } from './pipes/control-config-injector.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicGroupComponent } from './components/dynamic-group/dynamic-group.component';
import { InputErrorsModule } from '@dynamic-forms-poc/input-errors';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule,InputErrorsModule],
  declarations: [
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicCheckboxComponent,
    DynamicGroupComponent,
    ControlConfigInjectorPipe,
  ],
  exports:[ControlConfigInjectorPipe]
})
export class DynamicFormsModule {}
