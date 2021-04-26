import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-caught-pokemon-edit',
	templateUrl: './caught-pokemon-edit.component.html',
	styleUrls: ['./caught-pokemon-edit.component.scss'],
})
export class CaughtPokemonEditComponent implements OnInit {

	@Input() pokemon_chosen;

	constructor(private alertCtrl: AlertController) {
	}

	ngOnInit() {

	}

	public levelUp() {
		if (this.pokemon_chosen.level < 100) {
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

	public evolvePokemon() {
		if(this.pokemon_chosen.id == 5){
			this.pokemon_chosen = this.evolvingPokemon.find(pokemon => pokemon.id == 6);
		} else if(this.pokemon_chosen.id == 90){
			this.pokemon_chosen = this.evolvingPokemon.find(pokemon => pokemon.id == 91);
		} else {
			this.pokemon_chosen = this.evolvingPokemon.find(pokemon => pokemon.id == 87);
		}
	}

	public evolvingPokemon = [
		{
			id: 6,
			url: 'edit/6',
			species: 'Charizard',
			nickname: 'Foguinho',
			iconSource: './assets/images/icons/6.png',
			level: 30,
			status: 'Party',
			evolvingDisabled: true
		},
		{
			id: 91,
			url: 'edit/91',
			species: 'Cloyster',
			nickname: 'Bivalve',
			iconSource: './assets/images/icons/91.png',
			level: 15,
			status: 'Party',
			evolvingDisabled: true
		},
		{
			id: 87,
			url: 'edit/87',
			species: 'Dewgong',
			nickname: null,
			iconSource: './assets/images/icons/87.png',
			level: 10,
			status: 'Box',
			evolvingDisabled: true
		}
	];
}
