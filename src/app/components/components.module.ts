import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CaughtPokemonEditComponent } from './caught-pokemon-edit/caught-pokemon-edit.component';
import { RulesToSelectComponent } from './rules-to-select/rules-to-select.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [
        CaughtPokemonEditComponent,
        RulesToSelectComponent
    ],
    exports: [
        CaughtPokemonEditComponent,
        RulesToSelectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentsModule { }