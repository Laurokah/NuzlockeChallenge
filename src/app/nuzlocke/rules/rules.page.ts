import { Component, OnInit } from '@angular/core';
import { NuzlockeRule } from 'src/app/models/Nuzlocke-Models';
import { ChosenRulesService } from 'src/app/services/chosen-rules.service';
import { SavedNuzlockesService } from 'src/app/services/saved-nuzlockes.service';

@Component({
	selector: 'app-rules',
	templateUrl: './rules.page.html',
	styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

	constructor(
		public chosenRulesService : ChosenRulesService,
		public savedNuzlockesService: SavedNuzlockesService
	) { }

	ngOnInit() {
	}

	public rules: NuzlockeRule[] = [
		this.chosenRulesService.chosenCaptureRule,
		this.chosenRulesService.chosenRecaptureRule,
		this.chosenRulesService.chosenDeathRule,
		this.chosenRulesService.chosenRevivalRule,
		this.chosenRulesService.chosenGymsRule,
		this.chosenRulesService.chosenRandomizationRule
	];
}
