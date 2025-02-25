import { Component, inject } from '@angular/core';
import {
  DynamicControlBase,
  dynamicParentControlContainerProvider,
} from '../dynamic-control-base/dynamic-control-base';
import { DynamicComponentResolver } from '../../services/dynamic-component-resolver.service';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-forms-poc-dynamic-checkbox',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
  viewProviders: [dynamicParentControlContainerProvider],
})
export class DynamicGroupComponent extends DynamicControlBase {
  override formControl: AbstractControl = new FormGroup({});
  dynamicComponentResolver = inject(DynamicComponentResolver);
}
