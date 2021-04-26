import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GinasiosPage } from './ginasios.page';

const routes: Routes = [
  {
    path: '',
    component: GinasiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GinasiosPageRoutingModule {}
