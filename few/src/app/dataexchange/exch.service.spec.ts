import { TestBed } from '@angular/core/testing';

import { ExchService } from './exch.service';

describe('ExchService', () => {
  let service: ExchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
