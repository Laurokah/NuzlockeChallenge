import { Injectable } from '@angular/core';
import { ChosenRulesService } from './chosen-rules.service';
import { OwnedPokemonService } from './owned-pokemon.service';
import { CaptureService } from './capture.service';
import { CompletedGymsService } from './completed-gyms.service';
import { Storage } from '@ionic/storage-angular';
import { Nuzlocke } from '../models/Nuzlocke-Models';

@Injectable({
	providedIn: 'root'
})
export class SavedNuzlockesService {

	constructor(
		public ownedPokemonService : OwnedPokemonService,
		public chosenRulesService  : ChosenRulesService,
		public captureService      : CaptureService,
		public completedGymsService: CompletedGymsService,
		public storage : Storage
	){}

	public nuzlockes: Nuzlocke[] = [];
	public currentNuzlocke : Nuzlocke;

	public loadNuzlocke(nuzlocke){
		this.currentNuzlocke = nuzlocke;

		this.ownedPokemonService.allPokemon = this.currentNuzlocke.ownedPokemon;
		this.ownedPokemonService.applyStatusFilter("Party");

		this.captureService.routes = this.currentNuzlocke.routes;

		let chosenRules = this.currentNuzlocke.rules;
		this.chosenRulesService.chosenCaptureRule 		= chosenRules[0];
		this.chosenRulesService.chosenRecaptureRule 	= chosenRules[1];
		this.chosenRulesService.chosenDeathRule 		= chosenRules[2];
		this.chosenRulesService.chosenRevivalRule 		= chosenRules[3];
		this.chosenRulesService.chosenGymsRule 			= chosenRules[4];
		this.chosenRulesService.chosenRandomizationRule = chosenRules[5];

		this.completedGymsService.badges = this.currentNuzlocke.badges;
		this.completedGymsService.setNextAndLastBadgeOfLoadingNuzlocke();
	}

	public isNuzlockeCompleted(){
		return this.currentNuzlocke.completed;
	}

	public updateDatabase(){
		this.storage.set('nuzlockes', this.nuzlockes);
	}
}
