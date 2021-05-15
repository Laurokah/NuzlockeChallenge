import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectRulesPageRoutingModule } from './select-rules-routing.module';
import { SelectRulesPage } from './select-rules.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRulesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectRulesPage]
})
export class SelectRulesPageModule {}