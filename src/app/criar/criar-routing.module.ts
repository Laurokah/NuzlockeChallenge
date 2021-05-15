import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPage } from './criar.page';

const routes: Routes = [
	{
		path: '',
		component: CriarPage
	},
	{
		path: 'select-rules',
		loadChildren: () => import('./select-rules/select-rules.module').then(m => m.SelectRulesPageModule)
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CriarPageRoutingModule { }