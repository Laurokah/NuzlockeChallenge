import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomizacoesPageRoutingModule } from './randomizacoes-routing.module';

import { RandomizacoesPage } from './randomizacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomizacoesPageRoutingModule
  ],
  declarations: [RandomizacoesPage]
})
export class RandomizacoesPageModule {}
