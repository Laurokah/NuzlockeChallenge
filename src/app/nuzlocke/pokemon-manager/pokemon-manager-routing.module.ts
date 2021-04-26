import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonManagerPage } from './pokemon-manager.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonManagerPageRoutingModule {}
