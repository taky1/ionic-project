import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtuPage } from './etu.page';

const routes: Routes = [
  {
    path: '',
    component: EtuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtuPageRoutingModule {}
