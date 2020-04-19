import { TestBed } from '@angular/core/testing';

import { StateModellerService } from './state-modeller.service';

describe('StateModellerService', () => {
  let service: StateModellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateModellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
