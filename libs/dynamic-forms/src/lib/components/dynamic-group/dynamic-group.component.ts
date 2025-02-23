import { Component, OnInit } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'dynamic-forms-poc-dynamic-checkbox',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
})
export class DynamicGroupComponent
  extends DynamicControlBase
  implements OnInit
{

  ngOnInit(): void {
    console.log(this.controlConfig);
  }
}
