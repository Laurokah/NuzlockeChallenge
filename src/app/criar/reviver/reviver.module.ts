import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviverPageRoutingModule } from './reviver-routing.module';

import { ReviverPage } from './reviver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviverPageRoutingModule
  ],
  declarations: [ReviverPage]
})
export class ReviverPageModule {}
