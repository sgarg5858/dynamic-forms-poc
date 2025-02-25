import { Directive, inject, OnInit, Provider } from '@angular/core';
import { CONTROL_CONFIG } from '../../token/control-config.token';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
} from '@angular/forms';

export const dynamicParentControlContainerProvider: Provider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
};

@Directive()
export class DynamicControlBase implements OnInit {
  controlConfig = inject(CONTROL_CONFIG);

  parentGroupDirective = inject(ControlContainer);

  formControl: AbstractControl = new FormControl(
    this.controlConfig.defaultValue,
    { validators: this.controlConfig.validators }
  );

  ngOnInit(): void {
    (this.parentGroupDirective.control as FormGroup).addControl(
      this.controlConfig.name,
      this.formControl
    );
  }
}
