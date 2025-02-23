import { Directive, inject } from '@angular/core';
import { CONTROL_CONFIG } from '../../token/control-config.token';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()
export class DynamicControlBase {
  controlConfig = inject(CONTROL_CONFIG);
  //Definitely not a good approach
  parentForm = inject(ControlContainer);
  get form() {
    return this.parentForm.control as FormGroup;
  }
}
