import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NuzlockeOwnedPokemon } from 'src/app/models/Nuzlocke-Models';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.page.html',
	styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

	constructor(
		private route              : ActivatedRoute,
		public  ownedPokemonService: OwnedPokemonService
	){
		this.pokemon_to_pass = this.ownedPokemonService.allPokemon.find(
			owned => owned.url == 'edit/' + this.idValue
		);
	}

	ngOnInit() {
	}

	public idValue = this.route.snapshot.paramMap.get('id');
	public pokemon_to_pass: NuzlockeOwnedPokemon;

	
}
