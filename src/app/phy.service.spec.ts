import { TestBed } from '@angular/core/testing';

import { PhyService } from './phy.service';

describe('PhyService', () => {
  let service: PhyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
