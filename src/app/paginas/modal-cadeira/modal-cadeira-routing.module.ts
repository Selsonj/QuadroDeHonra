import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadeiraPage } from './modal-cadeira.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadeiraPageRoutingModule {}
