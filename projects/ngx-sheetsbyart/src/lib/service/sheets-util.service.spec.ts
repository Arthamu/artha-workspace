import { TestBed } from '@angular/core/testing';

import { SheetsUtilService } from './sheets-util.service';

describe('SheetsUtilService', () => {
  let service: SheetsUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetsUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should convert to json', () => {
    expect(service.convertToJson([["testValue1"], ["testValue2"]], ["testKey"])).
    toBe(JSON.stringify([{ "testKey": "testValue1" }, { "testKey": "testValue2" }]));

  });
  it('should not convert undefined to json', () => {
    expect(service.convertToJson([["testValue1"], ["testValue2"],[]], ["testKey"])).
    toBe(JSON.stringify([{ "testKey": "testValue1" }, { "testKey": "testValue2" }]));

  });
  it('should not convert empty string to json', () => {
    expect(service.convertToJson([["testValue1"], ["testValue2"],[""]], ["testKey"])).
    toBe(JSON.stringify([{ "testKey": "testValue1" }, { "testKey": "testValue2" }]));

  });
  
});
