import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NuzlockeOwnedPokemon } from 'src/app/models/Nuzlocke-Models';
import { CaptureService } from 'src/app/services/capture.service';
import { OwnedPokemonService } from 'src/app/services/owned-pokemon.service';
import { PokemonDatabaseService } from 'src/app/services/pokemon-database.service';
import { SavedNuzlockesService } from 'src/app/services/saved-nuzlockes.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	constructor(
		public  router                : Router,
		private captureService        : CaptureService,
		public  pokemonDatabaseService: PokemonDatabaseService,
		public  ownedPokemonService   : OwnedPokemonService,
		public  savedNuzlockesService : SavedNuzlockesService,
		public  storage               : Storage
	) {}

	ngOnInit() {
	}

	public invalid = false;
	public errorMessage;

	public chosenDataPokemon;
	public pokemonNickname;
	public pokemonLevel;

	public saveEncounter(){
		if(!this.isInputInvalid()){
			this.invalid = false;
			let savedPokemon: NuzlockeOwnedPokemon = {
				url     : null,
				status  : null,
				nickname: this.pokemonNickname,
				level   : this.pokemonLevel,
				pokemon : this.chosenDataPokemon
			};
			this.captureService.registerPokemon(savedPokemon);

			this.savedNuzlockesService.currentNuzlocke.ownedPokemon = this.ownedPokemonService.allPokemon;
			this.savedNuzlockesService.updateDatabase();

			this.router.navigate(['/nuzlocke/encounters']);
		} else {
			this.invalid = true;
		}
	}

	public isInputInvalid(){
		if(this.pokemonLevel != null){
			if(this.pokemonLevel <= 0 || this.pokemonLevel > 100){
				this.errorMessage = 'O level do Pokémon deve estar entre 1 e 100';
			} else if(this.chosenDataPokemon == null){
				this.errorMessage = 'Você deve inserir qual o Pokémon capturado';
			} else {
				return false;
			}
		} else {
			if(this.chosenDataPokemon == null){
				this.errorMessage = 'Você deve inserir qual o Pokémon capturado e o seu level';
			} else {
				this.errorMessage = 'Você deve inserir qual o level do Pokémon capturado';
			}
			return true;
		}

		return true;
	}
}
