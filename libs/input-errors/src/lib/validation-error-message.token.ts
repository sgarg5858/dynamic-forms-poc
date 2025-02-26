import { InjectionToken } from '@angular/core';

export const ERROR_MESSAGES: { [key: string]: (args?: any) => string } = {
  required: () => `This field is required`,
  requiredTrue: () => `This field is required`,
  email: () => `It should be a valid email`,
  minlength: ({ requiredLength }) =>
    `Atleast ${requiredLength} characters are required`,
};

export const VALIDATION_ERROR_MESSAGES = new InjectionToken(
  'Validation Error Messages',
  {
    providedIn: 'root',
    factory: () => ERROR_MESSAGES,
  }
);
