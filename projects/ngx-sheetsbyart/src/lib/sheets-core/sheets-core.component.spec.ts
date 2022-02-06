import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsCoreComponent } from './sheets-core.component';

describe('SheetsCoreComponent', () => {
  let component: SheetsCoreComponent;
  let fixture: ComponentFixture<SheetsCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetsCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
