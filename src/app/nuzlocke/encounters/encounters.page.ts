import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { CaptureService } from 'src/app/services/capture.service';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { SavedNuzlockesService } from 'src/app/services/saved-nuzlockes.service';

@Component({
	selector: 'app-encounters',
	templateUrl: './encounters.page.html',
	styleUrls: ['./encounters.page.scss'],
})
export class EncountersPage implements OnInit {

	constructor(
		private alertCtrl: AlertController,
		private router: Router,
		public captureService: CaptureService,
		public chosenRulesService: ChosenRulesService,
		public savedNuzlockesService: SavedNuzlockesService
	){}

	ngOnInit() {
	}

	public makeNothing(){}

	public registerEncounter(routeIndex: number){
		if(!this.savedNuzlockesService.currentNuzlocke.completed){
			if(
				routeIndex != 0 &&
				this.chosenRulesService.chosenRecaptureRule.description == "O encontro na rota é considerado perdido"
			){
				this.hasEncounterFailed(routeIndex);
			} else {
				this.registerSuccess(true, routeIndex);
			}
	}
}

	public async hasEncounterFailed(routeIndex: number){
		const alert = await this.alertCtrl.create({
			header: 'Registrar encontro',
			message: 'Você capturou o Pokémon nessa rota?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.registerSuccess(true, routeIndex)
				},
				{
					text: 'Não',
					handler: () => this.registerSuccess(false, routeIndex)
				},
				'Voltar'
			]
		});
		alert.present();
	}

	public registerSuccess(isSuccess, routeIndex){
		if(isSuccess){
			this.router.navigate(['/nuzlocke/encounters/register']);
			this.captureService.routeIndex = routeIndex;
		} else {
			this.captureService.changeEncounterStatus(routeIndex, false)
		}
	}
}
