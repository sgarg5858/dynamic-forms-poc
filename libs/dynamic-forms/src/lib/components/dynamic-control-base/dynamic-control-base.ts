import { Directive, inject, Provider } from '@angular/core';
import { CONTROL_CONFIG } from '../../token/control-config.token';
import { ControlContainer } from '@angular/forms';

export const dynamicParentControlContainerProvider: Provider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
};

@Directive()
export class DynamicControlBase {
  controlConfig = inject(CONTROL_CONFIG);
  //Definitely not a good approach
}
