import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-sheets-core',
  templateUrl: './sheets-core.component.html',
  styleUrls: ['./sheets-core.component.scss']
})
export class SheetsCoreComponent implements OnInit {

  @Input() row: number = 0;
  @Input() col: number = 0;
 
  data: string[][] = [];
 
  constructor() { }

  ngOnInit(): void {
    for (var i = 0; i < this.row; i++) {
      this.data[i] = [];
      for (var j = 0; j < this.col; j++) {
        this.data[i][j] = `${i},${j}`;
      }
      console.log(this.data);
    } }

    getColmunWidths(): Object {
     
      return "100px 100px 100px 100px 100px 100px 100px 100px 100px 100px";
    }
}
