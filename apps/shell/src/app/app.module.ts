import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PersonalDetailsModule } from '@dynamic-forms-poc/personal-details';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,PersonalDetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
