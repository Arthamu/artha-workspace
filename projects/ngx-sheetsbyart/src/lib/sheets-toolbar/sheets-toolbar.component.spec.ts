import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsToolbarComponent } from './sheets-toolbar.component';

describe('SheetsToolbarComponent', () => {
  let component: SheetsToolbarComponent;
  let fixture: ComponentFixture<SheetsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
