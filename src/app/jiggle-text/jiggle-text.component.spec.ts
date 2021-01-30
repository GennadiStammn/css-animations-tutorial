import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiggleTextComponent } from './jiggle-text.component';

describe('JiggleTextComponent', () => {
  let component: JiggleTextComponent;
  let fixture: ComponentFixture<JiggleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiggleTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiggleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
