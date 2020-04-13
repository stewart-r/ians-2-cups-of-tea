import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TeaTinComponent } from './tea-tin/tea-tin.component';
import { ParamsComponent } from './params/params.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TeaTinComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
