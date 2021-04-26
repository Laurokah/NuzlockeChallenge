import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapturaPage } from './recaptura.page';

const routes: Routes = [
  {
    path: '',
    component: RecapturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapturaPageRoutingModule {}
