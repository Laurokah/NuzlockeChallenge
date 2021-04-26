import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonManagerPageRoutingModule } from './pokemon-manager-routing.module';

import { PokemonManagerPage } from './pokemon-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonManagerPageRoutingModule
  ],
  declarations: [PokemonManagerPage]
})
export class PokemonManagerPageModule {}
