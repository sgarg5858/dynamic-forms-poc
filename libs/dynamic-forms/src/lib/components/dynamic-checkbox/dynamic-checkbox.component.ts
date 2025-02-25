import { Component } from '@angular/core';
import { DynamicControlBase, dynamicParentControlContainerProvider } from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'dynamic-forms-poc-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  viewProviders:[dynamicParentControlContainerProvider]
})
export class DynamicCheckboxComponent
  extends DynamicControlBase
{

}
