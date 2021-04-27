import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-rules',
	templateUrl: './rules.page.html',
	styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	
	public rules = [
		{
			title: 'Captura',
			description: 'Capturar obrigatoriamente o segundo Pokémon que aparecer'
		},
		{
			title: 'Recaptura',
			description: 'O encontro na rota é considerado perdido'
		},
		{
			title: 'Morte',
			description: 'Se desmaiar apenas em batalhas contra treinadores'
		},
		{
			title: 'Reviver',
			description: 'A cada ginásio vencido, o jogador pode reviver um dos Pokémon mortos'
		},
		{
			title: 'Ginásios',
			description: 'Os Pokémon devem estar a 2 níveis abaixo do Pokémon mais forte do líder'
		},
		{
			title: 'Randomização',
			description: 'Apenas Pokémon randomizados'
		}
	]

}