import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiggleTextComponent } from './jiggle-text/jiggle-text.component';
import { TableCellsColorTransitionComponent } from './table-cells-color-transition/table-cells-color-transition.component';
import { ChooChooTrainComponent } from './choo-choo-train/choo-choo-train.component';
import { KirbyComponent } from './kirby/kirby.component';

@NgModule({
  declarations: [
    AppComponent,
    JiggleTextComponent,
    TableCellsColorTransitionComponent,
    ChooChooTrainComponent,
    KirbyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
