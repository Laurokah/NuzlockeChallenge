  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-mortes',
    templateUrl: './mortes.page.html',
    styleUrls: ['./mortes.page.scss'],
  })
  export class MortesPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    public category = {
      name: 'Condições de morte',
      description: 'Quando um Pokémon é considerado "morto"',
      options: [
        'Após desmaiar em quaisquer batalhas',
        'Se desmaiar apenas em batalhas contra treinadores',
        'Em qualquer ocasião de desmaio, exceto em tentativas de captura'
      ]
    };
  
    public selectedOptionIndex;
    public selectedOption;
  
    public registerOption(optionIndex: number) {
      this.selectedOptionIndex = optionIndex;
      this.selectedOption = this.category.options[optionIndex];
    }
  
    public printOption() {
      console.log('Opcão escolhida: ' + this.selectedOption);
    }
  }

  
