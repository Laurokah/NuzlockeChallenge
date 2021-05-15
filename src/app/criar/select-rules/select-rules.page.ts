import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-select-rules',
	templateUrl: './select-rules.page.html',
	styleUrls: ['./select-rules.page.scss'],
})
export class SelectRulesPage implements OnInit {

	constructor(
		public route: ActivatedRoute
	) { }

	ngOnInit() {
		this.rule_category = this.route.snapshot.paramMap.get('id');
	}

	public rule_category;

}
