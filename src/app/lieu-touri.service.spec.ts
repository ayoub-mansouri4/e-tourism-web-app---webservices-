import { TestBed } from '@angular/core/testing';

import { LieuTouriService } from './lieu-touri.service';

describe('LieuTouriService', () => {
  let service: LieuTouriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuTouriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
