import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-sheetsbyart',
  template: `
    <lib-sheets-core [row]="row" [col]="col">
    </lib-sheets-core>
  `,
  styles: [
  ]
})
export class NgxSheetsbyartComponent implements OnInit {

  @Input() row: number=0;
  @Input() col: number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
