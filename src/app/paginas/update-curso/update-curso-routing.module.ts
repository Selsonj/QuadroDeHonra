import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCursoPage } from './update-curso.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCursoPageRoutingModule {}
