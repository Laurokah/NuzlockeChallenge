import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-criar',
	templateUrl: './criar.page.html',
	styleUrls: ['./criar.page.scss'],
})
export class CriarPage implements OnInit {

	constructor(private alertCtrl: AlertController) { }

	ngOnInit() {
	}

	public newNuzlockeName;
	public selectedGame = 'Red';

  public async notificateCreation() {
		const alert = await this.alertCtrl.create({
			header: 'Nuzlocke criado!',
			message: 'O seu novo Nuzlocke foi criado com sucesso',
			buttons: [
				{
					text: 'OK!',
					handler: () => console.log('Nome: ' + this.newNuzlockeName + '. Jogo: ' + this.selectedGame)
				},
			]
		});
		alert.present();
	}
}
