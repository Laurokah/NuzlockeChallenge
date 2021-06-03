import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CaptureService } from '../services/capture.service';
import { ChosenRulesService } from '../services/chosen-rules.service';
import { SavedNuzlockesService } from '../services/saved-nuzlockes.service';

import { Storage } from '@ionic/storage-angular';
import { Nuzlocke, NuzlockeBadge, NuzlockeGame, NuzlockeRoute } from '../models/Nuzlocke-Models';
import { CompletedGymsService } from '../services/completed-gyms.service';

@Component({
	selector: 'app-criar',
	templateUrl: './criar.page.html',
	styleUrls: ['./criar.page.scss'],
})

export class CriarPage implements OnInit {

	constructor(
		private alertCtrl            : AlertController,
		public  chosenRulesService   : ChosenRulesService,
		public  savedNuzlockesService: SavedNuzlockesService,
		public  captureService       : CaptureService,
		public  completedGymsService : CompletedGymsService,
		public  router               : Router,
		public  storage              : Storage
	){}

	ngOnInit() {
	}

	public errorMessage
	public invalid = false;

	public newNuzlockeName;
	public selectedGame: NuzlockeGame;

	public resetInvalidFlag(){
		this.invalid = false;
	}

	public validateCreation(){
		this.invalid = true;

		if(this.newNuzlockeName == null || this.newNuzlockeName == ''){
			this.errorMessage = "Digite um nome para o seu Nuzlocke";
		} else if(this.selectedGame == null){
			this.errorMessage = "Escolha o jogo alvo do Nuzlocke";
		} else if (!this.chosenRulesService.areAllRulesSelected()){
			this.errorMessage = "Escolha as regras do seu Nuzlocke";
		} else {
			this.invalid = false;
			this.createNuzlocke();
			this.router.navigate(['/nuzlocke/pokemon-manager']);
		}
	}

	public createNuzlocke(){
		let routes: NuzlockeRoute[] = [
			{
				name      : 'Inicial',
				waiting   : true,
				successful: false,
				iconName  : 'time-outline',
				level     : null,
				nickname  : null,
				species   : null,
				iconSource: null
			}
		];

		for (const location of this.captureService.allLocations.filter(
			location => location.versionGroups.includes(this.selectedGame.versionGroup)
		)){
			routes.push({
				name      : location.name,
				waiting   : true,
				successful: false,
				iconName  : 'time-outline',
				level     : null,
				nickname  : null,
				species   : null,
				iconSource: null
			});
		}

		let badges: NuzlockeBadge[] = [];
		for (const badge of this.completedGymsService.templateBadges.find(
			badgeSet => badgeSet.version_groups.includes(this.selectedGame.versionGroup)
		).badges){
			badges.push({
				number       : badge.number,
				completed    : false,
				iconSource   : badge.uncheckedIcon,
				uncheckedIcon: badge.uncheckedIcon,
				checkedIcon  : badge.checkedIcon,
				lowestLevel  : badge.lowestLevel,
				greatestLevel: badge.greatestLevel
			});
		}

		let newNuzlocke: Nuzlocke = {
			name           : this.newNuzlockeName,
			game           : this.selectedGame,
			rules          : this.chosenRulesService.returnChosenRules(),
			completed      : false,
			badges		   : badges,
			ownedPokemon   : [],
			routes         : routes,
			revivingChances: 0
		};
		this.savedNuzlockesService.nuzlockes.push(newNuzlocke);

		this.savedNuzlockesService.loadNuzlocke(newNuzlocke);

		this.notificateCreation();

		this.savedNuzlockesService.updateDatabase();
	}

	public async notificateCreation(){
		const alert = await this.alertCtrl.create({
			header: 'Nuzlocke criado!',
			message: 'O seu novo Nuzlocke foi criado com sucesso',
			buttons: [
				{
					text: 'OK!'
				},
			]
		});
		alert.present();
	}
}
