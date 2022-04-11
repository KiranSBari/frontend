import { TestBed } from '@angular/core/testing';

import { PolicysericeService } from './policyserice.service';

describe('PolicysericeService', () => {
  let service: PolicysericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicysericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
