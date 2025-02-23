import { Component, OnInit } from '@angular/core';
import { DynamicControlBase, dynamicParentControlContainerProvider } from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'dynamic-forms-poc-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
  viewProviders:[dynamicParentControlContainerProvider]
})
export class DynamicSelectComponent extends DynamicControlBase implements OnInit {

  ngOnInit(): void {
    console.log(this.controlConfig);
  }
}
