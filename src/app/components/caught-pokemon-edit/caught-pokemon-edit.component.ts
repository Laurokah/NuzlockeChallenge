import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';
import { PokemonDatabaseService } from 'src/app/services/pokemon-database.service';

@Component({
	selector: 'app-caught-pokemon-edit',
	templateUrl: './caught-pokemon-edit.component.html',
	styleUrls: ['./caught-pokemon-edit.component.scss'],
})
export class CaughtPokemonEditComponent implements OnInit {

	@Input() pokemon_chosen;

	public errorMessage;
	public invalid;

	public currentPokemonStatus;

	constructor(
		private alertCtrl: AlertController,
		public pokemonDatabaseService: PokemonDatabaseService,
		public ownedPokemonService: OwnedPokemonService,
		public chosenRulesService: ChosenRulesService
	){

	}

	ngOnInit() {

		this.currentPokemonStatus = this.pokemon_chosen.status;
	}

	public levelUp() {
		if(this.pokemon_chosen.level < 100){		
			this.pokemon_chosen.level++;
		}
	}

	public async confirmEvolution() {
		const alert = await this.alertCtrl.create({
			header: 'Evolução!',
			message: 'Você deseja mesmo evoluir esse Pokémon?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.evolvePokemon()
				},
				'Não'
			]
		});
		alert.present();
	}

	public hasDismissed = true;
	public async confirmStatusChange(){
		let newStatus = this.pokemon_chosen.status;
		let oldStatus = this.currentPokemonStatus;

		const alert = await this.alertCtrl.create({
			message: 'Deseja mesmo transferir esse Pokémon de "' + 
						oldStatus + '" para "' +
						newStatus + '"?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.changePokemonStatus(newStatus, oldStatus, true)
				},
				{
					text: 'Não',
					handler: () => this.changePokemonStatus(newStatus, oldStatus, false)
				},
			]
		});

		if(this.hasDismissed){
			this.pokemon_chosen.status = oldStatus;
			this.ownedPokemonService.applyStatusFilterNoStatus();
		}

		alert.present();
	}

	public changePokemonStatus(newStatus, oldStatus, doChange){
		this.hasDismissed = false;
		if(doChange){
			this.pokemon_chosen.status = newStatus;
			this.currentPokemonStatus = this.pokemon_chosen.status;
		} else {
			this.pokemon_chosen.status = oldStatus;
		}
		this.hasDismissed = true;
		this.ownedPokemonService.applyStatusFilterNoStatus();
	}

	public evolvePokemon(){
		if(this.pokemon_chosen.pokemon.evolveToIds.length == 1){
			this.evolveToId(this.pokemon_chosen.pokemon.evolveToIds[0]);
		} else {
			this.chooseEvolution(this.pokemon_chosen.pokemon.evolveToIds);
		}
	}

	public evolveToId(idToEvolve){
		this.pokemon_chosen.pokemon =  this.pokemonDatabaseService.allPokemon.find(
			pokemon => pokemon.id == idToEvolve
		);
	}
	
	public async chooseEvolution(evolveToIds){
		let evolutions = [];
		for (const pokemonId of evolveToIds){
			let pokemon = this.pokemonDatabaseService.allPokemon.find(
				pokemon => pokemon.id == pokemonId
			);

			evolutions.push(
				{
					text: pokemon.species,
					handler: () => this.evolveToId(pokemonId)
				}
			);		
		}
		evolutions.push("Voltar");

		const alert = await this.alertCtrl.create({
			message: 'Qual é a evolução desejada?',
			buttons: evolutions
		});
		alert.present();
	}
}
