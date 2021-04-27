import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-nuzlocke',
	templateUrl: './nuzlocke.page.html',
	styleUrls: ['./nuzlocke.page.scss'],
})
export class NuzlockePage implements OnInit {

  constructor(private alertCtrl: AlertController, private router: Router) { }

	ngOnInit() {
	}

	public async endNuzlocke() {
		const alert = await this.alertCtrl.create({
			header: 'Finalizar Nuzlocke!',
			message: 'Você deseja finalizar esse Nuzlocke?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.redirectToHome()
				},
				'Não'
			]
		});
		alert.present();
	}
	public redirectToHome(){
		this.router.navigate(['/home']);
	}
}
