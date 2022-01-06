import { TestBed } from '@angular/core/testing';

import { CheService } from './che.service';

describe('CheService', () => {
  let service: CheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
