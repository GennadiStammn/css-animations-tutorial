import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiggleTextComponent } from './jiggle-text/jiggle-text.component';

@NgModule({
  declarations: [
    AppComponent,
    JiggleTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
