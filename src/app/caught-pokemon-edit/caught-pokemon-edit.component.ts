import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-caught-pokemon-edit',
	templateUrl: './caught-pokemon-edit.component.html',
	styleUrls: ['./caught-pokemon-edit.component.scss'],
})
export class CaughtPokemonEditComponent implements OnInit {

	@Input() pokemon_chosen;

	constructor() {
	}

	ngOnInit() {

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
