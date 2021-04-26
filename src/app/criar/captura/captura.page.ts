import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captura',
  templateUrl: './captura.page.html',
  styleUrls: ['./captura.page.scss'],
})
export class CapturaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public category = {
    name: 'Condições de captura',
    description: null,
    options: [
      'Capturar obrigatoriamente o primeiro Pokémon que aparecer',
      'Capturar obrigatoriamente o segundo Pokémon que aparecer',
      'Capturar obrigatoriamente o terceiro Pokémon que aparecer'
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



