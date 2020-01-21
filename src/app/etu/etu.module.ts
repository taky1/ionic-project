import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtuPageRoutingModule } from './etu-routing.module';

import { EtuPage } from './etu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtuPageRoutingModule
  ],
  declarations: [EtuPage]
})
export class EtuPageModule {}
