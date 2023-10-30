export class SheetsCellEvent {
    content:string;
    row:number;
    col:number;
    constructor(content:string,row:number,col:number) {
      this.content = content;
      this.row = row;
      this.col = col;
    }
  }