import { TestBed } from '@angular/core/testing';

import { SavedNuzlockesService } from './saved-nuzlockes.service';

describe('SavedNuzlockesService', () => {
  let service: SavedNuzlockesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedNuzlockesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});