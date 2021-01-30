import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooChooTrainComponent } from './choo-choo-train.component';

describe('ChooChooTrainComponent', () => {
  let component: ChooChooTrainComponent;
  let fixture: ComponentFixture<ChooChooTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooChooTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooChooTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
