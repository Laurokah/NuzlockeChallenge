import { Injectable } from '@angular/core';
import { PokemonDatabaseService } from './pokemon-database.service';

@Injectable({
	providedIn: 'root'
})
export class CaptureService {

	constructor(
		public pokemonDatabaseService: PokemonDatabaseService
	){}

	public routeIndex;

	public currentRoute = {
		name: null,
		waiting: true,
		successful: false,
		iconName: null,
		level: null,
		nickname: null,
		species: null,
		iconSource: null
	};

	public kantoRoutes = [
		'Inicial',
		'Route 1',
		'Route 2',
		'Route 3',
		'Route 4',
		'Route 4 (gift)',
		'Route 5',
		'Route 6',
		'Route 7',
		'Route 8',
		'Route 9',
		'Route 10',
		'Route 11',
		'Route 12',
		'Route 12 (static)',
		'Route 13',
		'Route 14',
		'Route 15',
		'Route 16',
		'Route 16 (static)',
		'Route 17',
		'Route 18',
		'Route 19',
		'Route 20',
		'Route 21',
		'Route 22',
		'Route 23',
		'Route 24',
		'Route 25',
		'Cerulean Cave',
		'Cerulean Cave (static)',
		'Cerulean City',
		'Cinnabar Island',
		'Celadon City',
		'Celadon Mansion (gift)',
		'Digglet\'s Cave',
		'Fuchsia City',
		'Fighting Dojo (gift)',
		'Pewter Museum Fossil (gift)',
		'Silph Co. (gift)',
		'Mt. Moon',
		'Mt. Moon Fossil (gift)',
		'Pallet Town',
		'Pokémon Mansion',
		'Pokémon Tower',
		'Power Plant'		,
		'Power Plant (static)',
		'Rock Tunnel',
		'Safari Zone',
		'Seafoam Islands',
		'Seafoam Islands (static)',
		'SS Anne Harbor',
		'Vermilion City',
		'Victory Road',
		'Victory Road (static)',
		'Viridian City',
		'Viridian Forest',
	];

	public routes = [];

	public clone(gameGen){
		let routesToCopy = [];
		for (const routeName of this.kantoRoutes){
			routesToCopy.push({
				name: routeName,
				waiting: true,
				successful: false,
				iconName: 'time-outline',
				level: null,
				nickname: null,
				species: null,
				iconSource: null
			});
		}
		return routesToCopy;
	}

	public registerPokemon(savedPokemon){
		this.changeEncounterStatus(this.routeIndex, true)

		this.currentRoute.level = savedPokemon.level;
		this.currentRoute.nickname = savedPokemon.nickname;
		this.currentRoute.species = savedPokemon.pokemon.species;
		this.currentRoute.iconSource = savedPokemon.pokemon.iconSource;
	}

	public changeEncounterStatus(routeIndex: number, successful: boolean) {
		this.currentRoute = this.routes[routeIndex];
		if (successful) {
			this.currentRoute.iconName = 'checkmark';
			this.currentRoute.successful = true;
		} else {
			this.currentRoute.iconName = 'close';
			this.currentRoute.successful = false;
		}
		this.currentRoute.waiting = false;
	}

}