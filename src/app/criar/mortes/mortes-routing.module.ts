import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortesPage } from './mortes.page';

const routes: Routes = [
  {
    path: '',
    component: MortesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortesPageRoutingModule {}
