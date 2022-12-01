import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-sheets-toolbar',
  templateUrl: './sheets-toolbar.component.html',
  styleUrls: ['./sheets-toolbar.component.scss']
})
export class SheetsToolbarComponent implements OnInit {

  @Output() toolBarAction = new EventEmitter<string>();

  

  constructor() { }

  ngOnInit(): void {
  }

  actionSave(){
    console.log("Save Action clicked")
    this.toolBarAction.emit("SAVE");
  }
}
