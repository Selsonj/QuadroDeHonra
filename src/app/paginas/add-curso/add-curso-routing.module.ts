import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCursoPage } from './add-curso.page';

const routes: Routes = [
  {
    path: '',
    component: AddCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCursoPageRoutingModule {}
