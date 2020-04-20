import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTeaRoundsComponent } from './multi-tea-rounds.component';

describe('MultiTeaRoundsComponent', () => {
  let component: MultiTeaRoundsComponent;
  let fixture: ComponentFixture<MultiTeaRoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTeaRoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTeaRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
