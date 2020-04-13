import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaTinComponent } from './tea-tin.component';

describe('TeaTinComponent', () => {
  let component: TeaTinComponent;
  let fixture: ComponentFixture<TeaTinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaTinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaTinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
