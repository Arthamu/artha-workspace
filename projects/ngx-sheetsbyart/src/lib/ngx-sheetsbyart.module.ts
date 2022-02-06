import { NgModule } from '@angular/core';
import { NgxSheetsbyartComponent } from './ngx-sheetsbyart.component';
import { SheetsCoreComponent } from './sheets-core/sheets-core.component';
import { SheetsCellComponent } from './sheets-cell/sheets-cell.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NgxSheetsbyartComponent,
    SheetsCoreComponent,
    SheetsCellComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule

  ],
  exports: [
    NgxSheetsbyartComponent
  ]
})
export class NgxSheetsbyartModule { }
