import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsCellComponent } from './sheets-cell.component';

describe('SheetsCellComponent', () => {
  let component: SheetsCellComponent;
  let fixture: ComponentFixture<SheetsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetsCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
