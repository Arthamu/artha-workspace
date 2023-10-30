import { Component, Input, OnInit, Output } from '@angular/core';
import { SheetsUtilService } from '../service/sheets-util.service';
import { SheetsCellEvent } from '../sheets-cell/sheets-cell.event';

@Component({
  selector: 'lib-sheets-core',
  templateUrl: './sheets-core.component.html',
  styleUrls: ['./sheets-core.component.scss']
})
export class SheetsCoreComponent implements OnInit {
  update(row: number, col: number, content: any) {

  }
  @Input() row: number = 0;
  @Input() col: number = 0;

  actionData: string = "";

  data: string[][] = [];
  coloumnNames = ["Test","artha"];
  sheetsUtilService: SheetsUtilService;

  constructor(sheetsUtilService: SheetsUtilService) {
    this.sheetsUtilService = sheetsUtilService;
  }

  contentChange(cont:SheetsCellEvent){

    this.data[cont.row][cont.col] = this.sheetsUtilService.deepCopy(cont.content);
    console.log('contentChange: '+cont.row +':'+cont.col+':'+this.data[cont.row][cont.col] )
  }
  ngOnInit(): void {
    for (let i = 0; i < this.row; i++) {
      this.data[i] = [];
      for (let j = 0; j < this.col; j++) {
        this.data[i][j] = "";
      }
    }
  }

  getColmunWidths(): Object {
    let gridColoumn:string ="";
    for (let index = 0; index < this.col; index++) {
      gridColoumn = gridColoumn+" "+"100px";
    }
    return gridColoumn;
  }

  toolBarActions(action: string) {
    console.log("Action Recived")
    if (action == "SAVE") {
      let toJsonString: string = this.sheetsUtilService.convertToJson(this.sheetsUtilService.deepCopy(this.data), this.coloumnNames);
      alert(toJsonString);
    }
  }
}
