import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule } from '@dynamic-forms-poc/dynamic-forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule,DynamicFormsModule],
  declarations: [PersonalDetailsComponent],
  exports: [PersonalDetailsComponent],
})
export class PersonalDetailsModule {}
