import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiggleTextComponent } from './jiggle-text/jiggle-text.component';
import { TableCellsColorTransitionComponent } from './table-cells-color-transition/table-cells-color-transition.component';
import { ChooChooTrainComponent } from './choo-choo-train/choo-choo-train.component';

@NgModule({
  declarations: [
    AppComponent,
    JiggleTextComponent,
    TableCellsColorTransitionComponent,
    ChooChooTrainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
