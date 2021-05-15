import { TestBed } from '@angular/core/testing';

import { ChosenRulesService } from './chosen-rules.service';

describe('ChosenRulesService', () => {
  let service: ChosenRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChosenRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
