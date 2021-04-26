import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptura',
  templateUrl: './recaptura.page.html',
  styleUrls: ['./recaptura.page.scss'],
})
export class RecapturaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public category = {
		name: 'Condições de recaptura',
		description: 'O que fazer quando o Pokémon designado para captura fugir, ser morto acidentalmente, etc',
		options: [
			'O encontro na rota é considerado perdido',
			'O jogador deve continuar fazendo encontros na rota e tentar pegar o próximo Pokémon que aparecer',
			'O jogador deve tentar realizer o encontro novamente, mas terá que capturar um Pokémon da mesma espécie do perdido primeiramente'
		]
	};

	public selectedOptionIndex;
	public selectedOption;

	public registerOption(optionIndex: number) {
		this.selectedOptionIndex = optionIndex;
		this.selectedOption = this.category.options[optionIndex];
	}

	public printOption(){
		console.log('Opcão escolhida: ' + this.selectedOption);
	}

}
