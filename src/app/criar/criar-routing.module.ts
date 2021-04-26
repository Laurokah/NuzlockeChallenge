import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPage } from './criar.page';

const routes: Routes = [
	{
		path: '',
		component: CriarPage
	},
  {
    path: 'captura',
    loadChildren: () => import('./captura/captura.module').then( m => m.CapturaPageModule)
  },
  {
    path: 'ginasios',
    loadChildren: () => import('./ginasios/ginasios.module').then( m => m.GinasiosPageModule)
  },
  {
    path: 'mortes',
    loadChildren: () => import('./mortes/mortes.module').then( m => m.MortesPageModule)
  },
  {
    path: 'randomizacoes',
    loadChildren: () => import('./randomizacoes/randomizacoes.module').then( m => m.RandomizacoesPageModule)
  },
  {
    path: 'recaptura',
    loadChildren: () => import('./recaptura/recaptura.module').then( m => m.RecapturaPageModule)
  },
  {
    path: 'reviver',
    loadChildren: () => import('./reviver/reviver.module').then( m => m.ReviverPageModule)
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CriarPageRoutingModule { }