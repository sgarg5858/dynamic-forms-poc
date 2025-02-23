import { Component, OnInit } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'dynamic-forms-poc-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
})
export class DynamicCheckboxComponent
  extends DynamicControlBase
  implements OnInit
{

  ngOnInit(): void {
    console.log(this.controlConfig);
  }
}
