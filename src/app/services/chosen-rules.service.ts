import { HttpClient } from '@angular/common/http';
import { Injectable, Version } from '@angular/core';
import { Region } from '../models/API-Models';
import { NuzlockeGame, NuzlockeRule } from '../models/Nuzlocke-Models';
import { CaptureService } from './capture.service';

@Injectable({
	providedIn: 'root'
})
export class ChosenRulesService {

	constructor(
		public http          : HttpClient,
		public captureService: CaptureService
	){}

	public availableGames: NuzlockeGame[] = [];
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
		return  this.chosenCaptureRule 	     != null &&
				this.chosenRecaptureRule     != null &&
				this.chosenRevivalRule       != null &&
				this.chosenDeathRule         != null &&
				this.chosenGymsRule          != null &&
				this.chosenRandomizationRule != null;
	}

	public chosenCaptureRule      : NuzlockeRule;
	public chosenRecaptureRule    : NuzlockeRule;
	public chosenDeathRule        : NuzlockeRule;
	public chosenRevivalRule      : NuzlockeRule;
	public chosenGymsRule         : NuzlockeRule;
	public chosenRandomizationRule: NuzlockeRule;

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
		this.chosenCaptureRule       = null;
		this.chosenRecaptureRule     = null;
		this.chosenDeathRule         = null;
		this.chosenRevivalRule       = null;
		this.chosenGymsRule          = null;
		this.chosenRandomizationRule = null;
	}

	public async buildGamesListFromAPI(){
		this.availableGames = [];
		this.captureService.avalilableVersionGroups = [];
		this.captureService.allLocations = [];

		let url;
		let result;

		let i = 1;
		let isThere404Exception = false;

		for(i = 1; i <= 6; i++){
			url = 'https://pokeapi.co/api/v2/region/' + i;
			result = await this.http.get<Region>(url).toPromise();

			let regionVersionGroups = [];
			for(const versionGroup of result['version_groups']){
				let versionGroupName = versionGroup['name'];
				if(!versionGroupName.includes('lets-go')){
					regionVersionGroups.push(versionGroupName);
					this.captureService.avalilableVersionGroups.push(versionGroupName );
				}
			}

			for (const location of result['locations']){
				this.captureService.allLocations.push({
					name: this.formatRouteName(location['name']),
					versionGroups: regionVersionGroups
				});
			}

		}
		i = 1;
		while(!isThere404Exception){
			url = 'https://pokeapi.co/api/v2/version/' + i++;
			try{
				result = await this.http.get<Version>(url).toPromise();

				let gameVersionGroup = result['version_group']['name'];
				if(this.captureService.avalilableVersionGroups.includes(gameVersionGroup)){
					this.availableGames.push({
						name: this.formatGameName(result['name']),
						versionGroup: gameVersionGroup
					});
				}
			} catch(error) {
				if(error.status == 404){
					isThere404Exception = true;
				}
			}
		}
	}

	public formatRouteName(nameToFormat){
		nameToFormat = nameToFormat.replaceAll('-', ' ');

		let returnString = '';
		let lastWasSpace = false;
		for (let index = 0; index < nameToFormat.length; index++) {
			if(index == 0 || lastWasSpace){
				returnString += nameToFormat[index].toUpperCase();
				lastWasSpace = false;
			} else {
				returnString += nameToFormat[index];	
			}
			if(nameToFormat[index] == ' '){
				lastWasSpace = true;
			}
		}
		return returnString;
	}

	public formatGameName(nameToFormat){
		let fromTo = [
			{
				from: 'firered',
				to: 'Fire Red'
			},
			{
				from: 'leafgreen',
				to: 'Leaf Green'
			},
			{
				from: 'heartgold',
				to: 'Heart Gold'
			},
			{
				from: 'soulsilver',
				to: 'Soul Silver'
			}
		];

		let chosenFromTo = fromTo.find(fromTo => fromTo.from == nameToFormat);
		if(chosenFromTo != null){
			return chosenFromTo.to;
		} else {
			nameToFormat = nameToFormat.replaceAll('-', ' ');

			let returnString = '';
			let lastWasSpace = false;
			for (let index = 0; index < nameToFormat.length; index++) {
				if(index == 0 || lastWasSpace){
					returnString += nameToFormat[index].toUpperCase();
					lastWasSpace = false;
				} else {
					returnString += nameToFormat[index];	
				}
				if(nameToFormat[index] == ' '){
					lastWasSpace = true;
				}
			}
			return returnString;
		}
	}
}