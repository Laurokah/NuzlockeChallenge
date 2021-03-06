import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NuzlockeBadge } from 'src/app/models/Nuzlocke-Models';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { CompletedGymsService } from 'src/app/services/completed-gyms.service';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';
import { SavedNuzlockesService } from 'src/app/services/saved-nuzlockes.service';

@Component({
	selector: 'app-gyms',
	templateUrl: './gyms.page.html',
	styleUrls: ['./gyms.page.scss'],
})
export class GymsPage implements OnInit {

	constructor(
		private alertCtrl            : AlertController,
		public  completedGymsService : CompletedGymsService,
		public  chosenRulesService   : ChosenRulesService,
		public  ownedPokemonService  : OwnedPokemonService,
		public  savedNuzlockesService: SavedNuzlockesService
	){}

	ngOnInit() {
	}

	public errorMessage;
	public invalid;

	public challengingGym = false;
	public challengingGymMessage = "Estou pronto para desafiar o ginásio";

	public selectedBadgeNumber = 0;

	public shouldGymOptionsAppear(){
		return 	!this.completedGymsService.areAllGymsCompleted() &&
				!this.savedNuzlockesService.isNuzlockeCompleted();
	}

	public doesChosenRuleAffectMinimumLevels(){
		return this.chosenRulesService.chosenGymsRule.description != 'Não há restrições de nível para desafiar os ginásios';
	}

	public changeChallengingStatus(){
		if(this.arePokemonLevelsSuitable()){
			this.challengingGym = true;
			this.challengingGymMessage = "Ginásio em andamento";
		}
	}

	public arePokemonLevelsSuitable(){
		let twoLevelsLowerThanStrongerPokemon = this.completedGymsService.nextBadge.greatestLevel - 2;
		let sameLevelThanWeakerPokemon = this.completedGymsService.nextBadge.lowestLevel;

		let currentPartyPokemon = this.ownedPokemonService.allPokemon.filter(
			pokemon => pokemon.status == 'Party'
		);

		if(currentPartyPokemon.length == 0){
			this.errorMessage = 'Você está sem Pokémon! Registre ao menos o seu inicial antes de batalhar no ginásio';
			this.invalid = true;
			return false;
		}

		for (const partyPokemon of currentPartyPokemon){
			if(
				this.chosenRulesService.chosenGymsRule.description == "Os Pokémon devem estar a 2 níveis abaixo do Pokémon mais forte do líder" &&
				partyPokemon.level < twoLevelsLowerThanStrongerPokemon
			){
				this.errorMessage = 'Você deve upar todos os seus Pokémon até o level mínimo de ' +
									twoLevelsLowerThanStrongerPokemon + ' antes de enfrentar o próximo ginásio';
				this.invalid = true;
				return false;
			} else if(
				this.chosenRulesService.chosenGymsRule.description == "Os Pokémon devem estar no mesmo nível do Pokémon mais fraco do líder" &&
				partyPokemon.level < sameLevelThanWeakerPokemon
			){
				this.errorMessage = 'Você deve upar todos os seus Pokémon até o level mínimo de ' +
									sameLevelThanWeakerPokemon + ' antes de enfrentar o próximo ginásio';
				this.invalid = true;
				return false;
			}
		}
		this.invalid = false;
		return true;
	}

	public shouldGymBeMarked(badge: NuzlockeBadge){
		if(!this.savedNuzlockesService.isNuzlockeCompleted()){
			if(!this.challengingGym && this.doesChosenRuleAffectMinimumLevels()){
				this.errorMessage = "Antes de marcar um ginásio como concluído, você deve pressionar o botão acima para validar as condições do desafio";
				this.invalid = true;
			} else if(this.isPartyEmpty()){
				this.errorMessage = 'Você está sem Pokémon! Registre ao menos o seu inicial antes de batalhar no ginásio';
				this.invalid = true;
			} else if(badge == this.completedGymsService.nextBadge){
				this.invalid = false;
				this.confirmGymCompletion(badge);
			}
		}
	}

	public isPartyEmpty(){
		return this.ownedPokemonService.allPokemon.filter(
			pokemon => pokemon.status == 'Party'
		).length == 0;
	}

	public async confirmGymCompletion(badge: NuzlockeBadge) {
		const alert = await this.alertCtrl.create({
			header: 'Concluir ginásio',
			message: 'Você deseja mesmo marcar esse ginásio como concluído?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.markGymAsConcluded(badge)
				},
				'Não'
			]
		});
		alert.present();
	}

	public markGymAsConcluded(badge: NuzlockeBadge) {
		badge.iconSource = badge.checkedIcon;
		badge.completed = true;

		this.completedGymsService.lastCompletedBadge = badge;
		this.completedGymsService.nextBadge = this.completedGymsService.badges.find(
			next => next.number == badge.number + 1
		);

		if(this.chosenRulesService.chosenRevivalRule.description == "A cada ginásio vencido, o jogador pode reviver um dos Pokémon mortos"){
			this.savedNuzlockesService.currentNuzlocke.revivingChances++;
		}

		this.challengingGym = false;
		this.challengingGymMessage = "Estou pronto para desafiar o ginásio";

		this.savedNuzlockesService.updateDatabase();
	}

}
