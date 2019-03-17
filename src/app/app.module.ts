import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DomService } from './services/dom.service';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DomService],
  bootstrap: [AppComponent],
  entryComponents: [ TextInputComponent ]
})
export class AppModule { }
