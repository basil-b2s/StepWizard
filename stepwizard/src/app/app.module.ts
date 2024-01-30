// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StepformComponent } from './stepform/stepform.component';
import { StepComponent } from './step/step.component';
// import { StepComponent } from './stepform/step.component';

@NgModule({
  declarations: [
    AppComponent,
    StepformComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
