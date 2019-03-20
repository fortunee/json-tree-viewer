import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomService } from './services/dom.service';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { InputComponent } from './components/input/input.component';
import { ObjectNestComponent } from './components/object-nest/object-nest.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    InputComponent,
    ObjectNestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DomService],
  bootstrap: [AppComponent],
  entryComponents: [ InputComponent, CheckBoxComponent, ObjectNestComponent ]
})
export class AppModule { }
