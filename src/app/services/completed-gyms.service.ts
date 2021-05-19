import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CompletedGymsService {

	constructor() { }

	public badges = [
		{
			number: 1,
			iconSource: './assets/images/gyms/kanto-1-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-1-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-1.png',
			lowestLevel: 12,
			greatestLevel: 14,
			completed: false
		},
		{
			number: 2,
			iconSource: './assets/images/gyms/kanto-2-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-2-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-2.png',
			lowestLevel: 18,
			greatestLevel: 21,
			completed: false
		},
		{
			number: 3,
			iconSource: './assets/images/gyms/kanto-3-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-3-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-3.png',
			lowestLevel: 18,
			greatestLevel: 24,
			completed: false
		},
		{
			number: 4,
			iconSource: './assets/images/gyms/kanto-4-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-4-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-4.png',
			lowestLevel: 24,
			greatestLevel: 29,
			completed: false
		},
		{
			number: 5,
			iconSource: './assets/images/gyms/kanto-5-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-5-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-5.png',
			lowestLevel: 37,
			greatestLevel: 43,
			completed: false
		},
		{
			number: 6,
			iconSource: './assets/images/gyms/kanto-6-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-6-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-6.png',
			lowestLevel: 37,
			greatestLevel: 43,
			completed: false
		},
		{
			number: 7,
			iconSource: './assets/images/gyms/kanto-7-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-7-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-7.png',
			lowestLevel: 40,
			greatestLevel: 47,
			completed: false
		},
		{
			number: 8,
			iconSource: './assets/images/gyms/kanto-8-unchecked.png',
			uncheckedIcon: './assets/images/gyms/kanto-8-unchecked.png',
			checkedIcon: './assets/images/gyms/kanto-8.png',
			lowestLevel: 42,
			greatestLevel: 50,
			completed: false
		}
	];
	
	public resetGyms(){
		for (const badge of this.badges){
			badge.iconSource = badge.uncheckedIcon;
		}
	}

	public nextBadge = this.badges[0];
	public lastCompletedBadgeNumber = 0;
}