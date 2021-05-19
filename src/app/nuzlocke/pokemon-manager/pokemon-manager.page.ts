import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';

@Component({
	selector: 'app-pokemon-manager',
	templateUrl: './pokemon-manager.page.html',
	styleUrls: ['./pokemon-manager.page.scss'],
})
export class PokemonManagerPage implements OnInit {

	constructor(
		public router: Router,
		public ownedPokemonService: OwnedPokemonService,
		public chosenRulesService: ChosenRulesService
	){}

	ngOnInit() {
	}

	

	public currentStatus = "Party";

	public redirectToOwnedUrl(url){
		this.router.navigate(['/nuzlocke/pokemon-manager/' + url]);
	}
}
