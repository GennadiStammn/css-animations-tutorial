import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellsColorTransitionComponent } from './table-cells-color-transition.component';

describe('TableCellsColorTransitionComponent', () => {
  let component: TableCellsColorTransitionComponent;
  let fixture: ComponentFixture<TableCellsColorTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellsColorTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellsColorTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
