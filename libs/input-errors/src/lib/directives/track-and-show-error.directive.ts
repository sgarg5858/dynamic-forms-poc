import {
  ComponentRef,
  Directive,
  inject,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import { skip, startWith, Subscription } from 'rxjs';
import { ControlErrorComponent } from '../components/control-error/control-error.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngModel],[formControl],[formControlName]',
})
export class TrackAndShowErrorDirective implements OnInit, OnDestroy {
  private ngControl = inject(NgControl, { self: true });
  private viewContainerRef = inject(ViewContainerRef);
  private componentRef: ComponentRef<ControlErrorComponent> | null = null;

  subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.ngControl.control?.statusChanges
        .pipe(
          //because reactive forms don't emit error on the initialization
          //whereas TDF do
          startWith(this.ngControl.errors),
          skip(this.ngControl instanceof NgModel ? 1 : 0)
        )
        .subscribe(() => {
          if (this.ngControl.errors) {
            if (!this.componentRef) {
              this.componentRef = this.viewContainerRef.createComponent(
                ControlErrorComponent
              );
              this.componentRef.instance.errors = this.ngControl.errors;
            }
          } else {
            this.componentRef?.destroy();
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
