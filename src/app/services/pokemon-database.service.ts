import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PokemonSpecies, Pokemon } from '../models/API-Models';
import { NuzlockePokemon } from '../models/Nuzlocke-Models';

@Injectable({
	providedIn: 'root'
})
export class PokemonDatabaseService {

	constructor(
		private http   : HttpClient,
		public  storage: Storage
	){}

    public allPokemon: NuzlockePokemon[] = [];

	public pokemonLength = 721;
	public auxPokemonSpeciesList = [];
	public auxNuzlockePokemonList: NuzlockePokemon[] = [];

	public async buildPokemonListFromAPI(){
		for (let i = 1; i <= this.pokemonLength; i++) {
			let urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/' + i;
			let resultPokemonSpecies = await this.http.get<PokemonSpecies>(urlPokemonSpecies).toPromise();

			let urlPokemon = 'https://pokeapi.co/api/v2/pokemon/' + i;
			let resultPokemon = await this.http.get<Pokemon>(urlPokemon).toPromise();

			this.auxNuzlockePokemonList.push({
				id: resultPokemonSpecies['id'] + '',
				species: resultPokemonSpecies['name'],
				iconSource: resultPokemon['sprites']['versions']['generation-viii']['icons']['front_default'],
				evolveToIds: []
			});

			this.auxPokemonSpeciesList.push({
				id: resultPokemonSpecies['id'],
				name: resultPokemonSpecies['name'],
				evolveFrom: resultPokemonSpecies['evolves_from_species']
			});
		}

		for (let pokemonSpecies of this.auxPokemonSpeciesList) {
			if (pokemonSpecies.evolveFrom != null) {
				let from = this.auxNuzlockePokemonList.find(
					pokemon => pokemon.species == pokemonSpecies.evolveFrom.name
				);
				from.evolveToIds.push(pokemonSpecies.id + '');
			}
		}

		for(let nuzlockePokemon of this.auxNuzlockePokemonList){
			nuzlockePokemon.species = this.formatPokemonName(nuzlockePokemon.species);
		}
		this.allPokemon = this.auxNuzlockePokemonList;

		this.storage.set('allPokemon', this.allPokemon);
	}

    public formatPokemonName(nameToFormat){
		let fromTo = [
			{
				from: 'nidoran-f',
				to: 'Nidoran-F'
			},
			{
				from: 'nidoran-m',
				to: 'Nidoran-M'
			},
			{
				from: 'mr-mime',
				to: 'Mr. Mime'
			},
			{
				from: 'ho-oh',
				to: 'Ho-Oh'
			},
			{
				from: 'mime-jr',
				to: 'Mime Jr.'
			},
			{
				from: 'porygon-z',
				to: 'Porygon-Z'
			},
			{
				from: 'type-null',
				to: 'Type: Null'
			},
			{
				from: 'jangmo-o',
				to: 'Jangmo-o'
			},
			{
				from: 'hakamo-o',
				to: 'Hakamo-o'
			},
			{
				from: 'kommo-o',
				to: 'Kommo-o'
			},
			{
				from: 'tapu-koko',
				to: 'Tapu Koko'
			},
			{
				from: 'tapu-koko',
				to: 'Tapu Koko'
			},
			{
				from: 'tapu-lele',
				to: 'Tapu Lele'
			},
			{
				from: 'tapu-bulu',
				to: 'Tapu Bulu'
			},
			{
				from: 'tapu-fini',
				to: 'Tapu Fini'
			}
		];
		let chosenFromTo = fromTo.find(fromTo => fromTo.from == nameToFormat);
		if(chosenFromTo != null){
			return chosenFromTo.to;
		} else {
			return nameToFormat.charAt(0).toUpperCase() + nameToFormat.substring(1);
		}
	}
}