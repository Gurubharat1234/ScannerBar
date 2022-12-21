import { TestBed } from '@angular/core/testing';

import { BharatService } from './bharat.service';

describe('BharatService', () => {
  let service: BharatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BharatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
