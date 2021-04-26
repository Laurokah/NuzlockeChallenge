import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviverPage } from './reviver.page';

const routes: Routes = [
  {
    path: '',
    component: ReviverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviverPageRoutingModule {}
