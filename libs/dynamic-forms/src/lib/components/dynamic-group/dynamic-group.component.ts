import { Component, inject, OnInit } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';
import { DynamicComponentResolver } from '../../services/dynamic-component-resolver.service';

@Component({
  selector: 'dynamic-forms-poc-dynamic-checkbox',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
  
})
export class DynamicGroupComponent
  extends DynamicControlBase
  implements OnInit
{
  dynamicComponentResolver = inject(DynamicComponentResolver);
  ngOnInit(): void {
    console.log(this.controlConfig);
  }
}
