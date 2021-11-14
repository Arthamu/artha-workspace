import { TestBed } from '@angular/core/testing';

import { NgxSheetsbyartService } from './ngx-sheetsbyart.service';

describe('NgxSheetsbyartService', () => {
  let service: NgxSheetsbyartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSheetsbyartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('sampleTest', () => {
  let test = "test";
  it('Hijacked', () => {
    expect(test).toContain("test");
  });
});