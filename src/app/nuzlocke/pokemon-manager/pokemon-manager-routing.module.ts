import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonManagerPage } from './pokemon-manager.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonManagerPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonManagerPageRoutingModule {}
