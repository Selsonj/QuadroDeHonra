import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCursoPageRoutingModule } from './view-curso-routing.module';

import { ViewCursoPage } from './view-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCursoPageRoutingModule
  ],
  declarations: [ViewCursoPage]
})
export class ViewCursoPageModule {}
