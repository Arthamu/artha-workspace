import { NgModule } from '@angular/core';
import { NgxSheetsbyartComponent } from './ngx-sheetsbyart.component';
import { SheetsCoreComponent } from './sheets-core/sheets-core.component';
import { SheetsCellComponent } from './sheets-cell/sheets-cell.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SheetsToolbarComponent } from './sheets-toolbar/sheets-toolbar.component';


@NgModule({
  declarations: [
    NgxSheetsbyartComponent,
    SheetsCoreComponent,
    SheetsCellComponent,
    SheetsToolbarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,

  ],
  exports: [
    NgxSheetsbyartComponent
  ]
})
export class NgxSheetsbyartModule { }
