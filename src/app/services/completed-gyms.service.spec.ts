import { TestBed } from '@angular/core/testing';

import { CompletedGymsService } from './completed-gyms.service';

describe('CompletedGymsService', () => {
  let service: CompletedGymsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletedGymsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});