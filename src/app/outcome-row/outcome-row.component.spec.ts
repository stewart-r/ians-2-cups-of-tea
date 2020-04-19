import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeRowComponent } from './outcome-row.component';

describe('OutcomeRowComponent', () => {
  let component: OutcomeRowComponent;
  let fixture: ComponentFixture<OutcomeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
