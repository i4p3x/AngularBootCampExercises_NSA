import { TestBed } from '@angular/core/testing';

import { SInjectableService } from './s-injectable.service';

describe('SInjectableService', () => {
  let service: SInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
