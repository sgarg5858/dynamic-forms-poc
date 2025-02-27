import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  NgControl,
  NgForm,
  NgModel,
} from '@angular/forms';
import {
  EMPTY,
  fromEvent,
  iif,
  merge,
  skip,
  startWith,
  Subscription,
} from 'rxjs';
import { ControlErrorComponent } from '../components/control-error/control-error.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngModel],[formControl],[formControlName]',
})
export class TrackAndShowErrorDirective implements OnInit, OnDestroy {
  private ngControl = inject(NgControl, { self: true });
  elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);
  private componentRef: ComponentRef<ControlErrorComponent> | null = null;
  changeDetector = inject(ChangeDetectorRef);

  parentContainer = inject(ControlContainer, { optional: true });
  get form() {
    return this.parentContainer?.formDirective as
      | NgForm
      | FormGroupDirective
      | null;
  }

  subscriptions = new Subscription();

  ngOnInit(): void {
    if (!this.ngControl?.control) {
      throw new Error(`No control model for ${this.ngControl?.name} control`);
    }

    this.subscriptions.add(
      merge(
        //to update error messages when the control value/status changes
        this.ngControl.control.statusChanges,
        //to update error messages on blur event
        fromEvent(this.elementRef.nativeElement, 'blur'),
        // to update error messages on submit
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
      )
        .pipe(
          //because reactive forms don't emit error on the initialization
          //whereas TDF do
          startWith(this.ngControl.errors),
          skip(this.ngControl instanceof NgModel ? 1 : 0)
        )
        .subscribe(() => {
          console.log(this.ngControl.errors);
          // here we are hard coding when to update the error messages, we can make this configurable
          if (this.ngControl.errors && (this.ngControl.touched || this.form?.submitted)) {
            if (!this.componentRef) {
              this.componentRef = this.viewContainerRef.createComponent(
                ControlErrorComponent
              );
            }

            this.componentRef.setInput('errors', this.ngControl.errors);
            this.changeDetector.markForCheck();
          } else {
            this.componentRef?.destroy();
            this.componentRef = null;
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
