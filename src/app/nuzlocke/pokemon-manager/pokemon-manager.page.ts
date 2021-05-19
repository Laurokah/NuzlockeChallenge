import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';
import { SavedNuzlockesService } from 'src/app/services/saved-nuzlockes.service';

@Component({
	selector: 'app-pokemon-manager',
	templateUrl: './pokemon-manager.page.html',
	styleUrls: ['./pokemon-manager.page.scss'],
})
export class PokemonManagerPage implements OnInit {

	constructor(
		public router: Router,
		public ownedPokemonService: OwnedPokemonService,
		public chosenRulesService: ChosenRulesService,
		public savedNuzlockesService: SavedNuzlockesService
	){}

	ngOnInit() {
	}



	public currentStatus = "Party";
	public searchInput;

	public filterByName(){
		let formattedInput = this.searchInput.toUpperCase();
		if(this.searchInput == null || this.searchInput == ""){
			this.ownedPokemonService.applyStatusFilter(this.currentStatus);
		} else {
			this.ownedPokemonService.filteredPokemon = this.ownedPokemonService.statusFilteredPokemon.filter(
				owned => owned.pokemon.species.toUpperCase().includes(formattedInput) || (owned.nickname != null && owned.nickname.toUpperCase().includes(formattedInput))
			);
		}
	}

	public redirectToOwnedUrl(url){
		this.router.navigate(['/nuzlocke/pokemon-manager/' + url]);
	}
	public doesRevivalRuleAllowReviving(){
		return 	this.chosenRulesService.chosenRevivalRule.description == 'Caso o jogador adquira um Revive durante o jogo (sem ser por compra), ele pode reviver um dos Pokémon que estiverem mortos' ||
				this.chosenRulesService.chosenRevivalRule.description == 'A cada ginásio vencido, o jogador pode reviver um dos Pokémon mortos';
	}

	public isRevivalRuleBasedOnItem(){
		return 	this.chosenRulesService.chosenRevivalRule.description == 'Caso o jogador adquira um Revive durante o jogo (sem ser por compra), ele pode reviver um dos Pokémon que estiverem mortos';
	}

	public addRevivalChance(){
		this.savedNuzlockesService.currentNuzlocke.revivingChances++;
	}
}
