import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Nuzlocke } from '../models/Nuzlocke-Models';
import { SavedNuzlockesService } from '../services/saved-nuzlockes.service';

@Component({
	selector: 'app-saves',
	templateUrl: './saves.page.html',
	styleUrls: ['./saves.page.scss'],
})
export class SavesPage implements OnInit {

	constructor(
		public router               : Router,
		public savedNuzlockesService: SavedNuzlockesService,
		public alertController      : AlertController,
		public storage              : Storage
	) { }

	ngOnInit() {
		if(this.savedNuzlockesService.nuzlockes.length == 0){
			this.storage.get('nuzlockes').then(
				nuzlocke => this.savedNuzlockesService.nuzlockes.push(...nuzlocke)
			);
		}
	}

	public completedGymsAmount(nuzlocke: Nuzlocke){
		return nuzlocke.badges.filter(badge => badge.completed).length;
	}
	
	public redirectToNuzlocke(nuzlocke: Nuzlocke){
		this.savedNuzlockesService.loadNuzlocke(nuzlocke);
		this.router.navigate(['/nuzlocke/pokemon-manager']);
	}

	public deleteNuzlocke(nuzlocke: Nuzlocke){
		this.savedNuzlockesService.nuzlockes.splice(
			this.savedNuzlockesService.nuzlockes.indexOf(nuzlocke), 1
		);

		this.savedNuzlockesService.updateDatabase();
	}


	public async confirmDeleting(nuzlocke: Nuzlocke){
		const alert = await this.alertController.create({
			header: 'Atenção!',
			message: 'Você deseja mesmo deletar esse Nuzlocke? Essa operação não pode ser desfeita',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.deleteNuzlocke(nuzlocke)
				},
				'Não'
			]
		});
		alert.present();
	}
}
