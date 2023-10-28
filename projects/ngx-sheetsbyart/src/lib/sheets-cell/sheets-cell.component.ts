import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-sheets-cell',
  templateUrl: './sheets-cell.component.html',
  styleUrls: ['./sheets-cell.component.scss']
})
export class SheetsCellComponent implements OnInit {

  @Input() content:string = "";

  @Output() contentChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitChange(){
    console.log(this.content);
    this.contentChange.emit(this.content);
  }
}
