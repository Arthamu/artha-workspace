import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SheetsUtilService {

  
  constructor() { }

  public convertToJson(data: string[][], coloumnNames: string[]): string {

    let request: any = [];
    data.forEach(row => {
      let rows: Map<string, string> = new Map<string, string>();

      coloumnNames.forEach((element:string, index: number) =>{
        rows.set(coloumnNames[index],row[index])
      } );
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

public deepCopy(data : any): any{
    return JSON.parse(JSON.stringify(data));
  }
}