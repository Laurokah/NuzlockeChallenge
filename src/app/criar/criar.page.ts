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

}
