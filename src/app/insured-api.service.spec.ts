import { TestBed } from '@angular/core/testing';

import { InsuredApiService } from './insured-api.service';

describe('InsuredApiService', () => {
  let service: InsuredApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuredApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
