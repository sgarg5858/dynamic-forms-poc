import { InjectionToken } from '@angular/core';

export const ERROR_MESSAGES: { [key: string]: (args?: unknown) => string } = {
  required: () => `This field is required`,
  requiredTrue: () => `This field is required`,
  email: () => `It should be a valid email`,
  minlength: (args) => {
    if (args && typeof args === 'object' && 'requiredLength' in args) {
      return `Atleast ${
        (args as { requiredLength: number }).requiredLength
      } characters are required`;
    }
    return 'some more characters are needed.';
  },
};

export const VALIDATION_ERROR_MESSAGES = new InjectionToken(
  'Validation Error Messages',
  {
    providedIn: 'root',
    factory: () => ERROR_MESSAGES,
  }
);
