import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizacoes',
  templateUrl: './randomizacoes.page.html',
  styleUrls: ['./randomizacoes.page.scss'],
})
export class RandomizacoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public category = {
		name: 'Randomizações',
		description: null,
		options: [
			{
				name: 'Pokémon randomizados?',
				selected: false
			},
			{
				name: 'Itens randomizados?',
				selected: false
			}
		]
	};

	public printOption(){
		console.log('Pokémon: ' + this.category.options[0].selected);
		console.log('Itens: ' + this.category.options[1].selected);
	}
}
