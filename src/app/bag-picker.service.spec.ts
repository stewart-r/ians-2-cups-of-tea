import { TestBed } from '@angular/core/testing';

import { BagPickerService } from './bag-picker.service';

describe('BagPickerService', () => {
  let service: BagPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return something', () => {
    expect(service.pick({ initialState: 'double', noOfCups: 3}, 'left')).toBeTruthy();
  });

});
