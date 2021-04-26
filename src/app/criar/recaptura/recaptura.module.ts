import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapturaPageRoutingModule } from './recaptura-routing.module';

import { RecapturaPage } from './recaptura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapturaPageRoutingModule
  ],
  declarations: [RecapturaPage]
})
export class RecapturaPageModule {}
