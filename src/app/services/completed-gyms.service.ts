import { Injectable } from '@angular/core';
import { NuzlockeBadge } from '../models/Nuzlocke-Models';

@Injectable({
	providedIn: 'root'
})
export class CompletedGymsService {

	constructor() { }

	public baseIconURL = './assets/images/gyms/';
	public badges: NuzlockeBadge[] = [];

	public templateBadges = [
		{
			version_groups: [
				'red-blue'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'kanto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/1.png',
					lowestLevel: 12,
					greatestLevel: 14
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'kanto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/2.png',
					lowestLevel: 18,
					greatestLevel: 21
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'kanto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/3.png',
					lowestLevel: 18,
					greatestLevel: 24
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'kanto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/4.png',
					lowestLevel: 24,
					greatestLevel: 29
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'kanto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/5.png',
					lowestLevel: 37,
					greatestLevel: 43
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'kanto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/6.png',
					lowestLevel: 37,
					greatestLevel: 43
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'kanto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/7.png',
					lowestLevel: 40,
					greatestLevel: 47
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'kanto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/8.png',
					lowestLevel: 42,
					greatestLevel: 50
				}
			]
		},
		{
			version_groups: [
				'yellow'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'kanto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/1.png',
					lowestLevel: 10,
					greatestLevel: 12
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'kanto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/2.png',
					lowestLevel: 18,
					greatestLevel: 21
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'kanto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/3.png',
					lowestLevel: 28,
					greatestLevel: 28
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'kanto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/4.png',
					lowestLevel: 30,
					greatestLevel: 32
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'kanto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/5.png',
					lowestLevel: 44,
					greatestLevel: 50
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'kanto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/6.png',
					lowestLevel: 50,
					greatestLevel: 50
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'kanto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/7.png',
					lowestLevel: 48,
					greatestLevel: 50
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'kanto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/8.png',
					lowestLevel: 50,
					greatestLevel: 55
				}
			]
		},
		{
			version_groups: [
				'firered-leafgreen'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'kanto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/1.png',
					lowestLevel: 10,
					greatestLevel: 12
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'kanto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/2.png',
					lowestLevel: 18,
					greatestLevel: 21
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'kanto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/3.png',
					lowestLevel: 18,
					greatestLevel: 24
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'kanto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/4.png',
					lowestLevel: 24,
					greatestLevel: 29
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'kanto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/5.png',
					lowestLevel: 37,
					greatestLevel: 43
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'kanto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/6.png',
					lowestLevel: 37,
					greatestLevel: 43
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'kanto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/7.png',
					lowestLevel: 40,
					greatestLevel: 47
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'kanto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/8.png',
					lowestLevel: 42,
					greatestLevel: 50
				}
			]
		},
		{
			version_groups: [
				'gold-silver'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'johto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/1.png',
					lowestLevel: 7,
					greatestLevel: 9
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'johto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/2.png',
					lowestLevel: 14,
					greatestLevel: 16
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'johto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/3.png',
					lowestLevel: 18,
					greatestLevel: 20
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'johto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/4.png',
					lowestLevel: 21,
					greatestLevel: 25
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'johto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/5.png',
					lowestLevel: 27,
					greatestLevel: 30
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'johto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/6.png',
					lowestLevel: 30,
					greatestLevel: 35
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'johto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/7.png',
					lowestLevel: 27,
					greatestLevel: 31
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'johto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/8.png',
					lowestLevel: 37,
					greatestLevel: 40
				},
				{
					number: 9,
					uncheckedIcon: this.baseIconURL + 'kanto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/1.png',
					lowestLevel: 41,
					greatestLevel: 42
				},
				{
					number: 10,
					uncheckedIcon: this.baseIconURL + 'kanto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/2.png',
					lowestLevel: 42,
					greatestLevel: 47
				},
				{
					number: 11,
					uncheckedIcon: this.baseIconURL + 'kanto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/3.png',
					lowestLevel: 40,
					greatestLevel: 46
				},
				{
					number: 12,
					uncheckedIcon: this.baseIconURL + 'kanto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/4.png',
					lowestLevel: 42,
					greatestLevel: 46
				},
				{
					number: 13,
					uncheckedIcon: this.baseIconURL + 'kanto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/5.png',
					lowestLevel: 33,
					greatestLevel: 39
				},
				{
					number: 14,
					uncheckedIcon: this.baseIconURL + 'kanto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/6.png',
					lowestLevel: 46,
					greatestLevel: 48
				},
				{
					number: 15,
					uncheckedIcon: this.baseIconURL + 'kanto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/7.png',
					lowestLevel: 45,
					greatestLevel: 50
				},
				{
					number: 16,
					uncheckedIcon: this.baseIconURL + 'kanto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/8.png',
					lowestLevel: 54,
					greatestLevel: 58
				}
			]
		},
		{
			version_groups: [
				'heartgold-soulsilver'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'johto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/1.png',
					lowestLevel: 9,
					greatestLevel: 13
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'johto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/2.png',
					lowestLevel: 15,
					greatestLevel: 17
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'johto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/3.png',
					lowestLevel: 17,
					greatestLevel: 19
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'johto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/4.png',
					lowestLevel: 21,
					greatestLevel: 25
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'johto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/5.png',
					lowestLevel: 29,
					greatestLevel: 31
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'johto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/6.png',
					lowestLevel: 30,
					greatestLevel: 35
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'johto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/7.png',
					lowestLevel: 30,
					greatestLevel: 34
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'johto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'johto/8.png',
					lowestLevel: 38,
					greatestLevel: 41
				},
				{
					number: 9,
					uncheckedIcon: this.baseIconURL + 'kanto/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/1.png',
					lowestLevel: 51,
					greatestLevel: 54
				},
				{
					number: 10,
					uncheckedIcon: this.baseIconURL + 'kanto/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/2.png',
					lowestLevel: 49,
					greatestLevel: 54
				},
				{
					number: 11,
					uncheckedIcon: this.baseIconURL + 'kanto/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/3.png',
					lowestLevel: 47,
					greatestLevel: 53
				},
				{
					number: 12,
					uncheckedIcon: this.baseIconURL + 'kanto/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/4.png',
					lowestLevel: 51,
					greatestLevel: 56
				},
				{
					number: 13,
					uncheckedIcon: this.baseIconURL + 'kanto/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/5.png',
					lowestLevel: 44,
					greatestLevel: 50
				},
				{
					number: 14,
					uncheckedIcon: this.baseIconURL + 'kanto/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/6.png',
					lowestLevel: 53,
					greatestLevel: 55
				},
				{
					number: 15,
					uncheckedIcon: this.baseIconURL + 'kanto/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/7.png',
					lowestLevel: 54,
					greatestLevel: 59
				},
				{
					number: 16,
					uncheckedIcon: this.baseIconURL + 'kanto/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'kanto/8.png',
					lowestLevel: 52,
					greatestLevel: 60
				}
			]
		},
		{
			version_groups: [
				'ruby-sapphire'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'hoenn/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/1.png',
					lowestLevel: 14,
					greatestLevel: 15
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'hoenn/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/2.png',
					lowestLevel: 17,
					greatestLevel: 18
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'hoenn/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/3.png',
					lowestLevel: 20,
					greatestLevel: 23
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'hoenn/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/4.png',
					lowestLevel: 26,
					greatestLevel: 28
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'hoenn/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/5.png',
					lowestLevel: 28,
					greatestLevel: 31
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'hoenn/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/6.png',
					lowestLevel: 30,
					greatestLevel: 33
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'hoenn/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/7.png',
					lowestLevel: 42,
					greatestLevel: 42
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'hoenn/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/8.png',
					lowestLevel: 40,
					greatestLevel: 43
				}
			]
		},
		{
			version_groups: [
				'emerald'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'hoenn/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/1.png',
					lowestLevel: 12,
					greatestLevel: 15
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'hoenn/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/2.png',
					lowestLevel: 16,
					greatestLevel: 19
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'hoenn/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/3.png',
					lowestLevel: 20,
					greatestLevel: 24
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'hoenn/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/4.png',
					lowestLevel: 24,
					greatestLevel: 29
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'hoenn/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/5.png',
					lowestLevel: 27,
					greatestLevel: 31
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'hoenn/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/6.png',
					lowestLevel: 29,
					greatestLevel: 33
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'hoenn/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/7.png',
					lowestLevel: 41,
					greatestLevel: 42
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'hoenn/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'hoenn/8.png',
					lowestLevel: 41,
					greatestLevel: 46
				}
			]
		},
		{
			version_groups: [
				'diamond-pearl'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'sinnoh/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/1.png',
					lowestLevel: 12,
					greatestLevel: 14
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'sinnoh/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/2.png',
					lowestLevel: 19,
					greatestLevel: 22
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'sinnoh/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/3.png',
					lowestLevel: 27,
					greatestLevel: 30
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'sinnoh/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/4.png',
					lowestLevel: 27,
					greatestLevel: 30
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'sinnoh/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/5.png',
					lowestLevel: 32,
					greatestLevel: 36
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'sinnoh/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/6.png',
					lowestLevel: 36,
					greatestLevel: 39
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'sinnoh/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/7.png',
					lowestLevel: 38,
					greatestLevel: 42
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'sinnoh/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/8.png',
					lowestLevel: 46,
					greatestLevel: 49
				}
			]
		},
		{
			version_groups: [
				'platinum'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'sinnoh/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/1.png',
					lowestLevel: 12,
					greatestLevel: 14
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'sinnoh/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/2.png',
					lowestLevel: 20,
					greatestLevel: 22
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'sinnoh/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/5.png',
					lowestLevel: 24,
					greatestLevel: 26
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'sinnoh/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/3.png',
					lowestLevel: 28,
					greatestLevel: 32
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'sinnoh/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/4.png',
					lowestLevel: 33,
					greatestLevel: 37
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'sinnoh/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/6.png',
					lowestLevel: 37,
					greatestLevel: 41
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'sinnoh/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/7.png',
					lowestLevel: 40,
					greatestLevel: 44
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'sinnoh/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'sinnoh/8.png',
					lowestLevel: 46,
					greatestLevel: 50
				}
			]
		},
		{
			version_groups: [
				'black-white'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'unova/1/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/1.png',
					lowestLevel: 12,
					greatestLevel: 14
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'unova/1/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/2.png',
					lowestLevel: 18,
					greatestLevel: 20
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'unova/1/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/5.png',
					lowestLevel: 21,
					greatestLevel: 23
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'unova/1/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/3.png',
					lowestLevel: 25,
					greatestLevel: 27
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'unova/1/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/4.png',
					lowestLevel: 29,
					greatestLevel: 31
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'unova/1/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/6.png',
					lowestLevel: 33,
					greatestLevel: 35
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'unova/1/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/7.png',
					lowestLevel: 37,
					greatestLevel: 39
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'unova/1/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/1/8.png',
					lowestLevel: 41,
					greatestLevel: 43
				}
			]
		},
		{
			version_groups: [
				'black-2-white-2'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'unova/2/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/1.png',
					lowestLevel: 11,
					greatestLevel: 13
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'unova/2/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/2.png',
					lowestLevel: 16,
					greatestLevel: 18
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'unova/2/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/5.png',
					lowestLevel: 22,
					greatestLevel: 24
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'unova/2/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/3.png',
					lowestLevel: 28,
					greatestLevel: 30
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'unova/2/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/4.png',
					lowestLevel: 31,
					greatestLevel: 33
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'unova/2/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/6.png',
					lowestLevel: 37,
					greatestLevel: 39
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'unova/2/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/7.png',
					lowestLevel: 46,
					greatestLevel: 48
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'unova/2/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'unova/2/8.png',
					lowestLevel: 49,
					greatestLevel: 51
				}
			]
		},
		{
			version_groups: [
				'x-y'
			],
			badges: [
				{
					number: 1,
					uncheckedIcon: this.baseIconURL + 'kalos/1-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/1.png',
					lowestLevel: 10,
					greatestLevel: 12
				},
				{
					number: 2,
					uncheckedIcon: this.baseIconURL + 'kalos/2-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/2.png',
					lowestLevel: 25,
					greatestLevel: 25
				},
				{
					number: 3,
					uncheckedIcon: this.baseIconURL + 'kalos/5-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/5.png',
					lowestLevel: 28,
					greatestLevel: 32
				},
				{
					number: 4,
					uncheckedIcon: this.baseIconURL + 'kalos/3-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/3.png',
					lowestLevel: 30,
					greatestLevel: 34
				},
				{
					number: 5,
					uncheckedIcon: this.baseIconURL + 'kalos/4-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/4.png',
					lowestLevel: 35,
					greatestLevel: 37
				},
				{
					number: 6,
					uncheckedIcon: this.baseIconURL + 'kalos/6-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/6.png',
					lowestLevel: 38,
					greatestLevel: 42
				},
				{
					number: 7,
					uncheckedIcon: this.baseIconURL + 'kalos/7-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/7.png',
					lowestLevel: 44,
					greatestLevel: 48
				},
				{
					number: 8,
					uncheckedIcon: this.baseIconURL + 'kalos/8-unchecked.png',
					checkedIcon: this.baseIconURL + 'kalos/8.png',
					lowestLevel: 55,
					greatestLevel: 59
				}
			]
		}
	];

	public nextBadge: NuzlockeBadge;
	public lastCompletedBadge: NuzlockeBadge;

	public setNextAndLastBadgeOfLoadingNuzlocke(){
		for(const badge of this.badges){
			let oldBadge: NuzlockeBadge;
			if(!badge.completed){
				this.nextBadge = badge;
				this.lastCompletedBadge = oldBadge;
				break;
			} else {
				oldBadge = badge;
			}
		}
	}

	public areAllGymsCompleted(){
		return this.badges.filter(badge => badge.completed).length == this.badges.length;
	}
}
