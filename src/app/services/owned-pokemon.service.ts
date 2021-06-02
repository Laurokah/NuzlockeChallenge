import { Injectable } from '@angular/core';
import { NuzlockeOwnedPokemon } from '../models/Nuzlocke-Models';

@Injectable({
	providedIn: 'root'
})
export class OwnedPokemonService {

	constructor() { }

	public currentFilteredStatus = "Party";

	public allPokemon: NuzlockeOwnedPokemon[] = [];
	public filteredPokemon: NuzlockeOwnedPokemon[] = [];
	public statusFilteredPokemon: NuzlockeOwnedPokemon[] = [];

	public applyStatusFilterNoStatus(){
		this.applyStatusFilter(this.currentFilteredStatus);
	}

	public applyStatusFilter(currentStatus){
		this.currentFilteredStatus = currentStatus;
		this.filteredPokemon = 
			this.allPokemon.filter(
				owned => owned.status === currentStatus
			);
		this.statusFilteredPokemon = 
			this.allPokemon.filter(
				owned => owned.status === currentStatus
			);
	}
	
	public isThereNickname(nickname: string){
		return 	nickname != null &&
				!this.isStringAllWhitespaces(nickname);
	}

	public isStringAllWhitespaces(word: string){
		for (const letter of word.split('')){
			if(letter != ''){
				return false;
			}
		}
		return true;
	}
}