import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [PersonalDetailsComponent],
  exports: [PersonalDetailsComponent],
})
export class PersonalDetailsModule {}
