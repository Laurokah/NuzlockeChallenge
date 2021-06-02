import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { NuzlockeRoute } from 'src/app/models/Nuzlocke-Models';
import { CaptureService } from 'src/app/services/capture.service';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';
import { SavedNuzlockesService } from 'src/app/services/saved-nuzlockes.service';

@Component({
	selector: 'app-encounters',
	templateUrl: './encounters.page.html',
	styleUrls: ['./encounters.page.scss'],
})
export class EncountersPage implements OnInit {

	constructor(
		private alertCtrl            : AlertController,
		private router               : Router,
		public  captureService       : CaptureService,
		public  chosenRulesService   : ChosenRulesService,
		public  savedNuzlockesService: SavedNuzlockesService,
		public  ownedPokemonService  : OwnedPokemonService
	){}

	ngOnInit() {
	}

	public makeNothing(){}

	public registerEncounter(route: NuzlockeRoute){
		if(!this.savedNuzlockesService.currentNuzlocke.completed){
			if(
				route.name != 'Inicial' &&
				this.chosenRulesService.chosenRecaptureRule.description == "O encontro na rota é considerado perdido"
			){
				this.hasEncounterFailed(route);
			} else {
				this.registerSuccess(true, route);
			}
	}
}

public async hasEncounterFailed(route: NuzlockeRoute){
		const alert = await this.alertCtrl.create({
			header: 'Registrar encontro',
			message: 'Você capturou o Pokémon nessa rota?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.registerSuccess(true, route)
				},
				{
					text: 'Não',
					handler: () => this.registerSuccess(false, route)
				},
				'Voltar'
			]
		});
		alert.present();
	}

	public registerSuccess(isSuccess, route){
		if(isSuccess){
			this.router.navigate(['/nuzlocke/encounters/register']);
			this.captureService.currentRoute = route;
		} else {
			this.captureService.changeEncounterStatus(route, false)
		}
	}
}
