import { inject, Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERROR_MESSAGES } from '../validation-error-message.token';

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {
  errorMap = inject(VALIDATION_ERROR_MESSAGES);
  transform(errorKey: string, errorValue: unknown) {
    if (!this.errorMap[errorKey]) {
      console.warn(`Validation Error Message not found for ${errorKey}`);
      return '';
    }
    return this.errorMap[errorKey](errorValue);
  }
}
