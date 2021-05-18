import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaptureService } from 'src/app/services/capture.service';
import { PokemonDatabaseService } from 'src/app/services/pokemon-database.service';


@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	constructor(
		public router: Router,
		private captureService: CaptureService,
		public pokemonDatabaseService: PokemonDatabaseService
	) {}

	ngOnInit() {
	}

	public chosenDataPokemon;
	public pokemonNickname;
	public pokemonLevel;

	public saveEncounter(){
		let savedPokemon = {
			url: null,
			status: null,
			nickname: this.pokemonNickname,
			level: this.pokemonLevel,
			pokemon: this.chosenDataPokemon
		};
		this.captureService.registerPokemon(savedPokemon);
		
		this.router.navigate(['/nuzlocke/encounters']);

	}
}