import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';

@Component({
	selector: 'app-rules-to-select',
	templateUrl: './rules-to-select.component.html',
	styleUrls: ['./rules-to-select.component.scss'],
})
export class RulesToSelectComponent implements OnInit {

	@Input() categoryName;
	
	constructor(
		public chosenRulesService: ChosenRulesService,
		public router: Router
	){}

	ngOnInit() {
		this.chosenCategory = this.chosenRulesService.availableRules.find(
			category => category.urlValue == this.categoryName
		);

		this.rulesUrlIndex = this.rulesUrlHierarchy.findIndex(
			rule => rule.id == this.chosenCategory.id
		);
	}

	public errorMessage = "Selecione uma regra";
	public invalid = false;

	public chosenCategory;
	public selectedOptionIndex;

	public rulesUrlHierarchy = [
		{
			id: 'Criar',
			url: '/criar'
		},
		{
			id: 'Captura',
			url: '/criar/select-rules/captura',
		},
		{
			id: 'Recaptura',
			url: '/criar/select-rules/recaptura',
		},
		{
			id: 'Mortes',
			url: '/criar/select-rules/mortes',
		},
		{
			id: 'Reviver',
			url: '/criar/select-rules/reviver',
		},
		{
			id: 'Ginásios',
			url: '/criar/select-rules/ginasios',
		},
		{
			id: 'Randomizações',
			url: '/criar/select-rules/randomizacoes'
		},
		{
			id: 'Criar',
			url: '/criar'
		}
	];

	public rulesUrlIndex;

	public registerOption(optionIndex: number) {		
		this.selectedOptionIndex = optionIndex;
	}

	public returnToPastPage(){
		this.router.navigate([this.rulesUrlHierarchy[this.rulesUrlIndex - 1].url]);
	}

	public saveOption(){
		if(this.chosenCategory.id != 'Randomizações'){
			if(this.selectedOptionIndex == null){
				this.invalid = true;
			} else {
				this.chosenRulesService.addNextRule((this.rulesUrlIndex - 1), {
					title: this.chosenCategory.id,
					description: this.chosenCategory.options[this.selectedOptionIndex]
				});
	
				this.router.navigate([this.rulesUrlHierarchy[this.rulesUrlIndex + 1].url]);
				this.invalid = false;
			}
		} else {
			let finalRule;
			if(this.chosenCategory.options[0].selected){
				if(this.chosenCategory.options[1].selected){
					finalRule = "Pokémon e itens randomizados";
				} else {
					finalRule = "Apenas Pokémon randomizados";
				}
			} else {
				if(this.chosenCategory.options[1].selected){
					finalRule = "Apenas itens randomizados";
				} else {
					finalRule = "Sem randomizações";
				}
			}
			
			this.chosenRulesService.addNextRule((this.rulesUrlIndex - 1), {
				title: 'Randomizações',
				description: finalRule
			});

			this.router.navigate([this.rulesUrlHierarchy[this.rulesUrlIndex + 1].url]);
			this.invalid = false;
		}
		
	}
}