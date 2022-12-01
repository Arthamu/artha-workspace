import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-sheetsbyart',
  template: `
    <lib-sheets-core [row]="100" [col]="100">
    </lib-sheets-core>
  `,
  styles: [
  ]
})
export class NgxSheetsbyartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
