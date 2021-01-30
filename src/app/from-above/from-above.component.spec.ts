import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAboveComponent } from './from-above.component';

describe('FromAboveComponent', () => {
  let component: FromAboveComponent;
  let fixture: ComponentFixture<FromAboveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAboveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
