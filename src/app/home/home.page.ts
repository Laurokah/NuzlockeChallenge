import { Component } from '@angular/core';
import { PokemonDatabaseService } from '../services/pokemon-database.service';
import { Storage } from '@ionic/storage-angular';
import { ChosenRulesService } from '../services/chosen-rules.service';

@Component({
  selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
		public storage               : Storage,
		public pokemonDatabaseService: PokemonDatabaseService,
		public chosenRulesService    : ChosenRulesService
	){
		this.storage.get('allPokemon').then(
			pokemon =>  this.pokemonDatabaseService.allPokemon.push(...pokemon)
		);
		this.chosenRulesService.buildGamesListFromAPI();
		this.pokemonDatabaseService.buildPokemonListFromAPI();
	}
}
