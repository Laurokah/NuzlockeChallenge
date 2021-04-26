import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GinasiosPageRoutingModule } from './ginasios-routing.module';

import { GinasiosPage } from './ginasios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GinasiosPageRoutingModule
  ],
  declarations: [GinasiosPage]
})
export class GinasiosPageModule {}
