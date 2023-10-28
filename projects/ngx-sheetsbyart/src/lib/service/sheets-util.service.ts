import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SheetsUtilService {

  
  constructor() { }

  public sconvertToJson(data: string[][], coloumnNames: string[]): string {

    var request: any = [];
    data.forEach(row => {
      var rows: any = {};
      row.forEach((element, index: number) => {
        if (coloumnNames[index] !== undefined && element !== "") {
          rows[coloumnNames[index]] = element;
        }
      });
      if (!this.isEmpty(rows)) {
        request.push(rows);
      }
    });

    return JSON.stringify(request);
  }

  isEmpty(value: any): boolean {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}