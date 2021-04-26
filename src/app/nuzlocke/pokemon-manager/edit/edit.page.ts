import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.page.html',
	styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

	constructor(private route: ActivatedRoute) { 
		this.pokemon_to_pass = this.allPokemon.find(pokemon => pokemon.id == this.idValue)
	}

	ngOnInit() {
	}

	public idValue = Number.parseInt(this.route.snapshot.paramMap.get('id'));
	public pokemon_to_pass;

	public allPokemon = [
		{
			id: 5,
			url: 'edit/5',
			species: 'Charmeleon',
			nickname: 'Foguinho',
			iconSource: './assets/images/icons/5.png',
			level: 30,
			status: 'Party',
			evolvingDisabled: false
		},
		{
			id: 105,
			url: 'edit/105',
			species: 'Marowak',
			nickname: null,
			iconSource: './assets/images/icons/105.png',
			level: 22,
			status: 'Party',
			evolvingDisabled: true
		},
		{
			id: 90,
			url: 'edit/90',
			species: 'Shellder',
			nickname: 'Bivalve',
			iconSource: './assets/images/icons/90.png',
			level: 15,
			status: 'Party',
			evolvingDisabled: false
		},
		{
			id: 38,
			url: 'edit/38',
			species: 'Ninetales',
			nickname: 'Ahri',
			iconSource: './assets/images/icons/38.png',
			level: 25,
			status: 'Party',
			evolvingDisabled: true
		},
		{
			id: 95,
			url: 'edit/95',
			species: 'Onix',
			nickname: 'Chevrolet',
			iconSource: './assets/images/icons/95.png',
			level: 18,
			status: 'Party',
			evolvingDisabled: true
		}, 
		{
			id: 134,
			url: 'edit/134',
			species: 'Vaporeon',
			nickname: null,
			iconSource: './assets/images/icons/134.png',
			level: 20,
			status: 'Party',
			evolvingDisabled: true
		},
		{
			id: 42,
			url: 'edit/42',
			species: 'Golbat',
			nickname: null,
			iconSource: './assets/images/icons/42.png',
			level: 23,
			status: 'Box',
			evolvingDisabled: true
		},
		{
			id: 53,
			url: 'edit/53',
			species: 'Persian',
			nickname: 'Garfield',
			iconSource: './assets/images/icons/53.png',
			level: 18,
			status: 'Box',
			evolvingDisabled: true
		},
		{
			id: 86,
			url: 'edit/86',
			species: 'Seel',
			nickname: null,
			iconSource: './assets/images/icons/86.png',
			level: 10,
			status: 'Box',
			evolvingDisabled: false
		},
		{
			id: 81,
			url: 'edit/81',
			species: 'Magnemite',
			nickname: null,
			iconSource: './assets/images/icons/81.png',
			level: 25,
			status: 'Morto',
			evolvingDisabled: false
		}, 
		{
			id: 25,
			url: 'edit/25',
			species: 'Pikachu',
			nickname: 'Ash',
			iconSource: './assets/images/icons/25.png',
			level: 17,
			status: 'Morto',
			evolvingDisabled: false
		}
	];


}
