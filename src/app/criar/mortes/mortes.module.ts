import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortesPageRoutingModule } from './mortes-routing.module';

import { MortesPage } from './mortes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortesPageRoutingModule
  ],
  declarations: [MortesPage]
})
export class MortesPageModule {}
