import { TestBed } from '@angular/core/testing';

import { SRootInjectableService } from './s-root-injectable.service';

describe('SRootInjectableService', () => {
  let service: SRootInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRootInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
