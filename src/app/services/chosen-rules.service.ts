import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ChosenRulesService {

	constructor() { }

	public availableRules = [
		{
			id: 'Captura',
			urlValue: 'captura',
			name: 'Condições de captura',
			description: 'Qual Pokémon considerar como encontro válido',
			options: [
				'Capturar obrigatoriamente o primeiro Pokémon que aparecer',
				'Capturar obrigatoriamente o segundo Pokémon que aparecer',
				'Capturar obrigatoriamente o terceiro Pokémon que aparecer'
			]
		},
		{
			id: 'Ginásios',
			urlValue: 'ginasios',
			name: 'Condições para os ginásios',
			description: 'Nível mínimo em que os Pokémon devem estar para desafiar um ginásio',
			options: [
				'Os Pokémon devem estar a 2 níveis abaixo do Pokémon mais forte do líder',
				'Os Pokémon devem estar no mesmo nível do Pokémon mais fraco do líder',
				'Não há restrições de nível para desafiar os ginásios'
			]
		},
		{
			id: 'Mortes',
			urlValue: 'mortes',
			name: 'Condições de morte',
			description: 'Quando um Pokémon é considerado "morto"',
			options: [
				'Após desmaiar em quaisquer batalhas',
				'Se desmaiar apenas em batalhas contra treinadores',
				'Em qualquer ocasião de desmaio, exceto em tentativas de captura'
			]
		},
		{
			id: 'Recaptura',
			urlValue: 'recaptura',
			name: 'Condições de recaptura',
			description: 'O que fazer quando o Pokémon designado para captura fugir, ser morto acidentalmente, etc',
			options: [
				'O encontro na rota é considerado perdido',
				'O jogador deve continuar fazendo encontros na rota e tentar pegar o próximo Pokémon que aparecer',
				'O jogador deve tentar realizar o encontro novamente, mas terá que capturar um Pokémon da mesma espécie do perdido primeiramente'
			]
		},
		{
			id: 'Reviver',
			urlValue: 'reviver',
			name: 'Condições para reviver',
			description: 'Quando um Pokémon morto pode ser "revivido" e voltar a ser utilizável',
			options: [
				'Um Pokémon morto não pode mais ser revivido',
				'Caso o jogador adquira um Revive durante o jogo (sem ser por compra), ele pode reviver um dos Pokémon que estiverem mortos',
				'A cada ginásio vencido, o jogador pode reviver um dos Pokémon mortos'
			]
		},
		{
			id: 'Randomizações',
			urlValue: 'randomizacoes',
			name: 'Randomizações',
			description: null,
			options: [
				{
					title: 'Pokémon randomizados?',
					selected: false
				},
				{
					title: 'Itens randomizados?',
					selected: false
				}
			]
		}
	];

	public addNextRule(ruleIndex, ruleToAdd){
		if(ruleIndex == 0){
			this.chosenCaptureRule = ruleToAdd;
		} else if(ruleIndex == 1){
			this.chosenRecaptureRule = ruleToAdd;
		} else if(ruleIndex == 2){
			this.chosenDeathRule = ruleToAdd;
		} else if(ruleIndex == 3){
			this.chosenRevivalRule = ruleToAdd;
		} else if(ruleIndex == 4){
			this.chosenGymsRule = ruleToAdd;
		} else if(ruleIndex == 5){
			this.chosenRandomizationRule = ruleToAdd;
		}
	}

	public areAllRulesSelected(){
		return	this.chosenCaptureRule != null &&
				this.chosenRecaptureRule != null &&
				this.chosenRevivalRule != null &&
				this.chosenDeathRule != null &&
				this.chosenGymsRule != null &&
				this.chosenRandomizationRule != null;
	}

	public chosenCaptureRule;
	public chosenRecaptureRule;
	public chosenDeathRule;
	public chosenRevivalRule;
	public chosenGymsRule;
	public chosenRandomizationRule;

	public returnChosenRules(){
		return [
			this.chosenCaptureRule,
			this.chosenRecaptureRule,
			this.chosenDeathRule,
			this.chosenRevivalRule,
			this.chosenGymsRule,
			this.chosenRandomizationRule
		];
	}

	public resetRules(){
		this.chosenCaptureRule = null;
		this.chosenRecaptureRule = null;
		this.chosenDeathRule = null;
		this.chosenRevivalRule = null;
		this.chosenGymsRule = null;
		this.chosenRandomizationRule = null;
	}
}
