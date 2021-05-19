import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CaptureService } from '../services/capture.service';
import { ChosenRulesService } from '../services/chosen-rules.service';
import { SavedNuzlockesService } from '../services/saved-nuzlockes.service';

@Component({
	selector: 'app-criar',
	templateUrl: './criar.page.html',
	styleUrls: ['./criar.page.scss'],
})
export class CriarPage implements OnInit {

	
	constructor(
		private alertCtrl: AlertController,
		public chosenRulesService: ChosenRulesService,
		public savedNuzlockesService: SavedNuzlockesService,
		public captureService: CaptureService,
		public router: Router
	){}

	ngOnInit() {
	}

	public errorMessage
	public invalid = false;

	public newNuzlockeName;
	public selectedGame;

	public games = [
		"Red",
		"Blue",
		"Green",
		"Yellow",
		"Gold",
		"Silver",
		"Crystal",
		"Ruby",
		"Sapphire",
		"Emerald",
		"Diamond",
		"Pearl",
		"Platinum",
		"Black",
		"White",
		"Black 2",
		"White 2",
		"X",
		"Y",
		"Sun",
		"Moon",
		"Ultra Sun",
		"Ultra Moon",
		"Sword",
		"Shield",
		"Fire Red",
		"Leaf Green",
		"Heart Gold",
		"Soul Silver",
		"Omega Ruby",
		"Alpha Sapphire",
		"Brilliant Diamond",
		"Shining Pearl",
	];

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
		let generation = this.selectedGame == 'Red' ? 1 : 2;

		let newNuzlocke = {
			name: this.newNuzlockeName,
			game: this.selectedGame,
			rules: this.chosenRulesService.returnChosenRules(),
			completed: false,
			completedGyms: 0,
			ownedPokemon: [],
			routes: this.captureService.clone(generation),
			revivingChances: 0
		};
		this.savedNuzlockesService.nuzlockes.push(newNuzlocke);

		this.savedNuzlockesService.loadNuzlocke(newNuzlocke);

		this.notificateCreation();
	}

  public async notificateCreation() {
		const alert = await this.alertCtrl.create({
			header: 'Nuzlocke criado!',
			message: 'O seu novo Nuzlocke foi criado com sucesso',
			buttons: [
				{
					text: 'OK!',
					handler: () => console.log('Nome: ' + this.newNuzlockeName + '. Jogo: ' + this.selectedGame)
				},
			]
		});
	}
}
