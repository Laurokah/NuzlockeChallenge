import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ginasios',
  templateUrl: './ginasios.page.html',
  styleUrls: ['./ginasios.page.scss'],
})
export class GinasiosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public category = {
    name: 'Condições para desafiar os ginásios',
    description: 'Nível mínimo em que os Pokémon devem estar para desafiar um ginásio',
    options: [
      'Os Pokémon devem estar a 2 níveis abaixo do Pokémon mais forte do líder',
      'Os Pokémon	devem estar no mesmo nível do Pokémon mais fraco do líder',
      'Não há restrições de nível para desafiar os ginásios'
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


