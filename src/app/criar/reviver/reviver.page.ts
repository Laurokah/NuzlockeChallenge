import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviver',
  templateUrl: './reviver.page.html',
  styleUrls: ['./reviver.page.scss'],
})
export class ReviverPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public category = {
		name: 'Condições para reviver',
		description: 'Quando um Pokémon morto pode ser "revivido" e voltar a ser utilizável',
		options: [
			'Um Pokémon morto não pode mais ser revivido',
			'Caso o jogador adquira um Revive durante o jogo (sem ser por compra), ele pode reviver um dos Pokémon que estiverem mortos',
			'A cada ginásio vencido, o jogador pode reviver um dos Pokémon mortos'
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
