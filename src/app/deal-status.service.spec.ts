import { TestBed } from '@angular/core/testing';

import { DealStatusService } from './deal-status.service';

describe('DealStatusService', () => {
  let service: DealStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
