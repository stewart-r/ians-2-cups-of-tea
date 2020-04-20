import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaRoundComponent } from './tea-round.component';

describe('TeaRoundComponent', () => {
  let component: TeaRoundComponent;
  let fixture: ComponentFixture<TeaRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
