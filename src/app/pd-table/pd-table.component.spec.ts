import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTableComponent } from './pd-table.component';

describe('PdTableComponent', () => {
  let component: PdTableComponent;
  let fixture: ComponentFixture<PdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
