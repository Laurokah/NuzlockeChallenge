import { Component, OnInit } from '@angular/core';

import { AlertController} from '@ionic/angular';
@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.page.html',
  styleUrls: ['./encounters.page.scss'],
	selector: 'app-encounters',
	templateUrl: './encounters.page.html',
	styleUrls: ['./encounters.page.scss'],
})
export class EncountersPage implements OnInit {

  constructor() { }
	constructor(private alertCtrl: AlertController) { }

	ngOnInit() {
	}

	public routes = [
		{
			name: 'Route 1',
			waiting: false,
			successful: true,
			iconName: 'checkmark',
			pokemonSpecies: 'Staryu',
			pokemonNickname: 'Misty',
			pokemonLevel: 15,
			pokemon: {
				id: 120,
				iconSource: './assets/images/icons/120.png'
			}
		},
		{
			name: 'Route 2',
			waiting: false,
			successful: false,
			iconName: 'close',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 3',
			waiting: false,
			successful: true,
			iconName: 'checkmark',
			pokemonSpecies: 'Electabuzz',
			pokemonNickname: '',
			pokemonLevel: 19,
			pokemon: {
				id: 125,
				iconSource: './assets/images/icons/125.png'
			}
		},
		{
			name: 'Route 4',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 5',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 6',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 7',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 8',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 9',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		},
		{
			name: 'Route 10',
			waiting: true,
			successful: false,
			iconName: 'time-outline',
			pokemonSpecies: '',
			pokemonNickname: '',
			pokemonLevel: 0
		}
	];

  ngOnInit() {
  }
	public makeNothing() { }
	public async hasEncounterFailed(routeIndex: number) {
		const alert = await this.alertCtrl.create({
			header: 'Registrar encontro',
			message: 'Você capturou o Pokémon nessa rota?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.changeEncounterStatus(routeIndex, true)
				},
				{
					text: 'Não',
					handler: () => this.changeEncounterStatus(routeIndex, false)
				},
				'Voltar'
			]
		});
		alert.present();
	}

	public changeEncounterStatus(routeIndex: number, successful: boolean) {
		if (successful) {
			this.routes[routeIndex].iconName = 'checkmark';
			this.routes[routeIndex].successful = true;
		} else {
			this.routes[routeIndex].iconName = 'close';
			this.routes[routeIndex].successful = false;
		}
		this.routes[routeIndex].waiting = false;
		console.log('Houve encontro na rota ' + this.routes[routeIndex].name + ': ' + this.routes[routeIndex].successful);
	}
}
