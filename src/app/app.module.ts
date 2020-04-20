import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TeaTinComponent } from './tea-tin/tea-tin.component';
import { ParamsComponent } from './params/params.component';
import { CupsComponent } from './cups/cups.component';
import { CupComponent } from './cup/cup.component';
import { OutcomeRowComponent } from './outcome-row/outcome-row.component';
import { TeaRoundComponent } from './tea-round/tea-round.component';
import { ParamsMultiComponent } from './params-multi/params-multi.component';
import { MultiTeaRoundsComponent } from './multi-tea-rounds/multi-tea-rounds.component';
import { PdTableComponent } from './pd-table/pd-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TeaTinComponent,
    ParamsComponent,
    CupsComponent,
    CupComponent,
    OutcomeRowComponent,    
    TeaRoundComponent, ParamsMultiComponent, MultiTeaRoundsComponent, PdTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
