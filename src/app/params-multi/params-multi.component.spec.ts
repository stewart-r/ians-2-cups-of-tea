import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsMultiComponent } from './params-multi.component';

describe('ParamsMultiComponent', () => {
  let component: ParamsMultiComponent;
  let fixture: ComponentFixture<ParamsMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
