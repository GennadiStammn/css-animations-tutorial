import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinTransitionComponent } from './spin-transition.component';

describe('SpinTransitionComponent', () => {
  let component: SpinTransitionComponent;
  let fixture: ComponentFixture<SpinTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
