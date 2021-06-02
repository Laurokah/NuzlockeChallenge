import { Injectable } from '@angular/core';
import { NuzlockeRoute } from '../models/Nuzlocke-Models';
import { OwnedPokemonService } from './owned-pokemon.service';
import { PokemonDatabaseService } from './pokemon-database.service';

@Injectable({
	providedIn: 'root'
})
export class CaptureService {

	constructor(
		public ownedPokemonService : OwnedPokemonService,
		public pokemonDatabaseService: PokemonDatabaseService
	){}

	public allLocations = [];
	public avalilableVersionGroups = [];

	public currentRoute: NuzlockeRoute;
	public routes: NuzlockeRoute[] = [];

	public registerPokemon(savedPokemon){
		this.changeEncounterStatus(this.currentRoute, true)
		let partyLength = this.ownedPokemonService.allPokemon.filter(
			owned => owned.status == 'Party'
		).length;

		if(partyLength < 6){
			savedPokemon.status = 'Party';
		} else {
			savedPokemon.status = 'Box';
		}
		
		savedPokemon.url = 
			"edit/PKMN-" + (this.ownedPokemonService.allPokemon.length + 1);

		this.ownedPokemonService.allPokemon.push(savedPokemon);

		this.currentRoute.level      = savedPokemon.level;
		this.currentRoute.nickname   = savedPokemon.nickname;
		this.currentRoute.species    = savedPokemon.pokemon.species;
		this.currentRoute.iconSource = savedPokemon.pokemon.iconSource;

		this.ownedPokemonService.applyStatusFilterNoStatus();
	}

	public changeEncounterStatus(route: NuzlockeRoute, successful: boolean){
		if (successful) {
			route.iconName = 'checkmark';
			route.successful = true;
		} else {
			route.iconName = 'close';
			route.successful = false;
		}
		route.waiting = false;
	}

}
