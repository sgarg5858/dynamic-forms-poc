import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'dynamic-forms-poc-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  @Input() errors: ValidationErrors | null | undefined;
  //because errors object is an immutable object,
  trackByFn(_: number, item: KeyValue<string, unknown>): string {
    return item.key;
  }
}
