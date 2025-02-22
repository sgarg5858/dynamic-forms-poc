import { Validators } from '@angular/forms';
import { DynamicFormConfig } from '@dynamic-forms-poc/infrastructure/interfaces';

export const PersonalDetailsFormConfig: ()=> DynamicFormConfig = () => ({
  firstName: {
    name: 'firstName',
    controlType: 'input',
    type: 'text',
    defaultValue: '',
    label: 'First Name',
    validators: [Validators.required],
  },
  lastName: {
    name: 'lastName',
    controlType: 'input',
    type: 'text',
    defaultValue: '',
    label: 'Last Name',
    validators: [Validators.required],
  },
  email: {
    name: 'email',
    controlType: 'input',
    type: 'email',
    defaultValue: '',
    label: 'Email',
    validators: [Validators.required,Validators.email],
  },
  phoneNumber: {
    name: 'phoneNumber',
    controlType: 'input',
    type: 'text',
    defaultValue: '',
    label: 'Phone Number',
    validators: [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ],
  },
  nationality: {
    name: 'nationality',
    controlType: 'select',
    defaultValue: '',
    label: 'Nationality',
    options: [
      { value: 'indian', label: 'Indian' },
      { value: 'american', label: 'American' },
      { value: 'australian', label: 'Australian' },
    ],
    validators: [
      Validators.required,
    ],
  },
  sponsorshipRequired: {
    name: 'sponsorshipRequired',
    controlType: 'checkbox',
    defaultValue: false,
    label: 'Will you require sponsorship?',
    validators: [
      Validators.requiredTrue,
    ],
  },
});

