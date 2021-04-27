import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-saves',
	templateUrl: './saves.page.html',
	styleUrls: ['./saves.page.scss'],
})
export class SavesPage implements OnInit {

	constructor(public router: Router) { }

	ngOnInit() {
	}

	public nuzlockes = [
		{
			name: 'Nuzlocke da Quarentena',
			game: 'Red',
			completed: false,
			gyms: 0
		},
		{
			name: 'Mono Flying',
			game: 'Black 2',
			completed: true,
			gyms: 8
		},
		{
			name: 'Hell on Earth',
			game: 'Brilliant Diamond',
			completed: false,
			gyms: 2
		}
	];

	public redirectToNuzlocke(nuzlockeName: string){
		if(nuzlockeName == 'Nuzlocke da Quarentena'){
			this.router.navigate(['/nuzlocke/pokemon-manager']);
		}

	}

}