import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSheetsbyartComponent } from './ngx-sheetsbyart.component';

describe('NgxSheetsbyartComponent', () => {
  let component: NgxSheetsbyartComponent;
  let fixture: ComponentFixture<NgxSheetsbyartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSheetsbyartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSheetsbyartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
