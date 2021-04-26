import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuzlockePage } from './nuzlocke.page';

const routes: Routes = [
	{
		path: '',
		component: NuzlockePage,
		loadChildren: () => import('./pokemon-manager/pokemon-manager.module').then(m => m.PokemonManagerPageModule),
		children: [
			{
				path: 'pokemon-manager',
				loadChildren: () => import('./pokemon-manager/pokemon-manager.module').then(m => m.PokemonManagerPageModule)
			},
			{
				path: 'gyms',
				loadChildren: () => import('./gyms/gyms.module').then(m => m.GymsPageModule)
			},
			{
				path: 'encounters',
				loadChildren: () => import('./encounters/encounters.module').then(m => m.EncountersPageModule)
			},
			{
				path: 'rules',
				loadChildren: () => import('./rules/rules.module').then( m => m.RulesPageModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NuzlockePageRoutingModule { }
