import { Component, OnInit } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'dynamic-forms-poc-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent extends DynamicControlBase implements OnInit {

  ngOnInit(): void {
    console.log(this.controlConfig);
  }
}
