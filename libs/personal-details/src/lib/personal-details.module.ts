import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule } from '@dynamic-forms-poc/dynamic-forms';
import { InputErrorsModule } from '@dynamic-forms-poc/input-errors';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DynamicFormsModule,InputErrorsModule],
  declarations: [PersonalDetailsComponent],
  exports: [PersonalDetailsComponent],
})
export class PersonalDetailsModule {}
