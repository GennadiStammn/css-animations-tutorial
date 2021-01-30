import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiggleTextComponent } from './jiggle-text/jiggle-text.component';
import { TableCellsColorTransitionComponent } from './table-cells-color-transition/table-cells-color-transition.component';
import { ChooChooTrainComponent } from './choo-choo-train/choo-choo-train.component';
import { KirbyComponent } from './kirby/kirby.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { SpinTransitionComponent } from './spin-transition/spin-transition.component';
import { FromAboveComponent } from './from-above/from-above.component';
import { BubblesComponent } from './bubbles/bubbles.component';

@NgModule({
  declarations: [
    AppComponent,
    JiggleTextComponent,
    TableCellsColorTransitionComponent,
    ChooChooTrainComponent,
    KirbyComponent,
    PictureGridComponent,
    SpinTransitionComponent,
    FromAboveComponent,
    BubblesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
