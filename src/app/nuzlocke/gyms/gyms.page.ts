import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-gyms',
	templateUrl: './gyms.page.html',
	styleUrls: ['./gyms.page.scss'],
})
export class GymsPage implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	public badges = [
		{
			number: 1,
			iconSource: './assets/images/gyms/kanto-1.png',
			completed: false
		},
		{
			number: 2,
			iconSource: './assets/images/gyms/kanto-2.png',
			completed: false
		},
		{
			number: 3,
			iconSource: './assets/images/gyms/kanto-3.png',
			completed: false
		},
		{
			number: 4,
			iconSource: './assets/images/gyms/kanto-4.png',
			completed: false
		},
		{
			number: 5,
			iconSource: './assets/images/gyms/kanto-5.png',
			completed: false
		},
		{
			number: 6,
			iconSource: './assets/images/gyms/kanto-6.png',
			completed: false
		},
		{
			number: 7,
			iconSource: './assets/images/gyms/kanto-7.png',
			completed: false
		},
		{
			number: 8,
			iconSource: './assets/images/gyms/kanto-8.png',
			completed: false
		}
	];
}
