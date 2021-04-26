import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomizacoesPage } from './randomizacoes.page';

const routes: Routes = [
  {
    path: '',
    component: RandomizacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomizacoesPageRoutingModule {}
