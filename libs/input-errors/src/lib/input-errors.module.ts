import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ErrorMessagePipe } from './pipes/error-message.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlErrorComponent, ErrorMessagePipe],
  exports: [ControlErrorComponent],
})
export class InputErrorsModule {}
