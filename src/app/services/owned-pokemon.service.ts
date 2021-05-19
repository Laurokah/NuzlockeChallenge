import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OwnedPokemonService {

	constructor() { }

	public currentFilteredStatus = "Party";

	public allPokemon = [];
	public filteredPokemon = [];
	public statusFilteredPokemon = [];

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
}