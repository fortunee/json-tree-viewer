import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DomService } from './services/dom.service';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    NumberInputComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DomService],
  bootstrap: [AppComponent],
  entryComponents: [ TextInputComponent, NumberInputComponent, CheckBoxComponent ]
})
export class AppModule { }
