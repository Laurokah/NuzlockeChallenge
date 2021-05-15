import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ChosenRulesService } from '../services/chosen-rules.service';

@Component({
	selector: 'app-criar',
	templateUrl: './criar.page.html',
	styleUrls: ['./criar.page.scss'],
})
export class CriarPage implements OnInit {

	
	constructor(
		private alertCtrl: AlertController,
		public chosenRulesService: ChosenRulesService,
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
			this.notificateCreation();
			this.router.navigate(['/nuzlocke/pokemon-manager']);
		}
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
