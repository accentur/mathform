import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AnswerHIghlightDirective } from './answer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHIghlightDirective
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
