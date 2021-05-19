import { TestBed } from '@angular/core/testing';

import { OwnedPokemonService } from './owned-pokemon.service';

describe('OwnedPokemonService', () => {
  let service: OwnedPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnedPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});