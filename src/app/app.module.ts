import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiggleTextComponent } from './jiggle-text/jiggle-text.component';
import { TableCellsColorTransitionComponent } from './table-cells-color-transition/table-cells-color-transition.component';

@NgModule({
  declarations: [
    AppComponent,
    JiggleTextComponent,
    TableCellsColorTransitionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
