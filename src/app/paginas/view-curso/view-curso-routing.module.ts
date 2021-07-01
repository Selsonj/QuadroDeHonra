import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCursoPage } from './view-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCursoPageRoutingModule {}
