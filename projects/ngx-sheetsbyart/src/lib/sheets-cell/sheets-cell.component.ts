import { createViewChild } from '@angular/compiler/src/core';
import { Component, EventEmitter, Directive,Input, OnInit, Output, ViewChild, ContentChildren,QueryList,  ElementRef } from '@angular/core';
import { SheetsCellEvent } from './sheets-cell.event';

@Component({
  selector: 'lib-sheets-cell',
  templateUrl: './sheets-cell.component.html',
  styleUrls: ['./sheets-cell.component.scss']
})

export class SheetsCellComponent implements OnInit {

  @Input() content:string = "";
  @Input() row:number=0;
  @Input() col:number=0;

  @Output() contentChange = new EventEmitter<SheetsCellEvent>();
  
  @ViewChild ('firstNameField', {static: false}) coursesList!:  ElementRef;


  isDisabled:boolean = true;
  focus:boolean = false;
  constructor() {}

  ngOnInit(): void {
  }

  emitChange(){
    this.contentChange.emit(new SheetsCellEvent(this.content, this.row,this.col));
  }

  toggleCell(){
    this.isDisabled = !this.isDisabled;
    setTimeout(() => {
      if(!this.isDisabled){
      this.coursesList.nativeElement.focus();
      }
    }, 0);
 
  }
}
