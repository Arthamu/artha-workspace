import { Component, Input, OnInit, Output } from '@angular/core';
import { SheetsUtilService } from '../service/sheets-util.service';

@Component({
  selector: 'lib-sheets-core',
  templateUrl: './sheets-core.component.html',
  styleUrls: ['./sheets-core.component.scss']
})
export class SheetsCoreComponent implements OnInit {

  @Input() row: number = 0;
  @Input() col: number = 0;

  actionData:string = "";
 
  data: string[][] = [];
  coloumnNames = ["Test"];
  sheetsUtilService: SheetsUtilService;
 
  constructor(sheetsUtilService:SheetsUtilService) {
    this.sheetsUtilService = sheetsUtilService;
   }

  ngOnInit(): void {
    for (var i = 0; i < this.row; i++) {
      this.data[i] = [];
      for (var j = 0; j < this.col; j++) {
        this.data[i][j] = "";
      }
      console.log(this.data);
    } }

    getColmunWidths(): Object {
     
      return "100px 100px 100px 100px 100px 100px 100px 100px 100px 100px";
    }

    toolBarActions(action:string){
      console.log("Action Recived")
      if(action == "SAVE"){
        console.log("Saving in progress...");
        console.log(this.data);
        let toJsonString:string =this.sheetsUtilService.sconvertToJson(this.data, this.coloumnNames);
        alert(toJsonString);
      }
    }
}
