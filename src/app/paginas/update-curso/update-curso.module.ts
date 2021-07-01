import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCursoPageRoutingModule } from './update-curso-routing.module';

import { UpdateCursoPage } from './update-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCursoPageRoutingModule
  ],
  declarations: [UpdateCursoPage]
})
export class UpdateCursoPageModule {}
