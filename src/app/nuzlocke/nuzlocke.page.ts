import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChosenRulesService } from '../services/chosen-rules.service';
import { SavedNuzlockesService } from '../services/saved-nuzlockes.service';

@Component({
	selector: 'app-nuzlocke',
	templateUrl: './nuzlocke.page.html',
	styleUrls: ['./nuzlocke.page.scss'],
})
export class NuzlockePage implements OnInit {

	constructor(
		private alertCtrl            : AlertController,
		private router               : Router,
		public  savedNuzlockesService: SavedNuzlockesService,
		public  chosenRulesService   : ChosenRulesService
	) {}

	ngOnInit() {
	}

	public async confirmEnding() {
		const alert = await this.alertCtrl.create({
			header: 'Finalizar Nuzlocke!',
			message: 'Você deseja finalizar esse Nuzlocke?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.endNuzlocke()
				},
				'Não'
			]
		});
		alert.present();
	}

	public endNuzlocke(){
		this.savedNuzlockesService.currentNuzlocke.completed = true;
		this.savedNuzlockesService.updateDatabase();
		this.returnToHome();
	}

	public returnToHome(){
		this.chosenRulesService.resetRules();
		this.router.navigate(['/home']);
	}
}
