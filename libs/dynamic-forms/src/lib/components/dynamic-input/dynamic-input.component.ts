import { Component } from '@angular/core';
import {
  DynamicControlBase,
  dynamicParentControlContainerProvider,
} from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'dynamic-forms-poc-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  viewProviders: [dynamicParentControlContainerProvider],
})
export class DynamicInputComponent extends DynamicControlBase {}
