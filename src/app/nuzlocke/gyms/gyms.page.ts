import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-gyms',
	templateUrl: './gyms.page.html',
	styleUrls: ['./gyms.page.scss'],
})
export class GymsPage implements OnInit {

	constructor(private alertCtrl: AlertController) { }

	ngOnInit() {
	}

	public badges = [
		{
			number: 1,
			iconSource: './assets/images/gyms/kanto-1-unchecked.png',
			completed: false
		},
		{
			number: 2,
			iconSource: './assets/images/gyms/kanto-2-unchecked.png',
			completed: false
		},
		{
			number: 3,
			iconSource: './assets/images/gyms/kanto-3-unchecked.png',
			completed: false
		},
		{
			number: 4,
			iconSource: './assets/images/gyms/kanto-4-unchecked.png',
			completed: false
		},
		{
			number: 5,
			iconSource: './assets/images/gyms/kanto-5-unchecked.png',
			completed: false
		},
		{
			number: 6,
			iconSource: './assets/images/gyms/kanto-6-unchecked.png',
			completed: false
		},
		{
			number: 7,
			iconSource: './assets/images/gyms/kanto-7-unchecked.png',
			completed: false
		},
		{
			number: 8,
			iconSource: './assets/images/gyms/kanto-8-unchecked.png',
			completed: false
		}
	];

	public selectedBadgeNumber = 0;

	public async confirmGymCompletion(badgeNumber: number) {
		this.selectedBadgeNumber = badgeNumber;
		const alert = await this.alertCtrl.create({
			header: 'Concluir ginásio',
			message: 'Você deseja mesmo marcar esse ginásio como concluído?',
			buttons: [
				{
					text: 'Sim',
					handler: () => this.markGymAsConcluded()
				},
				'Não'
			]
		});
		alert.present();
	}

	public markGymAsConcluded() {
		let concludedBadge = this.badges.find(
			badge => badge.number == this.selectedBadgeNumber
		);
		concludedBadge.iconSource = concludedBadge.iconSource.substring(0, 28) + '.png';
		concludedBadge.completed = true;

		console.log('Ginásio nº ' + concludedBadge.number + ' concluído');
	}
}