import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSheetsbyartModule } from 'ngx-sheetsbyart';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSheetsbyartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
