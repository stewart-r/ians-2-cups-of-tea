import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TeaTinComponent } from './tea-tin/tea-tin.component';
import { ParamsComponent } from './params/params.component';
import { CupsComponent } from './cups/cups.component';
import { SingleSimulationComponent } from './single-simulation/single-simulation.component';
import { CupComponent } from './cup/cup.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TeaTinComponent,
    ParamsComponent,
    CupsComponent,
    SingleSimulationComponent,
    CupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
