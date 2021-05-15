import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRulesPage } from './select-rules.page';

const routes: Routes = [
  {
    path: ':id',
    component: SelectRulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRulesPageRoutingModule {}