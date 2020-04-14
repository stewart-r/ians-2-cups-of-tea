import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSimulationComponent } from './single-simulation.component';

describe('SingleSimulationComponent', () => {
  let component: SingleSimulationComponent;
  let fixture: ComponentFixture<SingleSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
