import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ErrorMessagePipe } from './pipes/error-message.pipe';
import { TrackAndShowErrorDirective } from './directives/track-and-show-error.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlErrorComponent, ErrorMessagePipe,TrackAndShowErrorDirective],
  exports: [ControlErrorComponent,TrackAndShowErrorDirective],
})
export class InputErrorsModule {}
