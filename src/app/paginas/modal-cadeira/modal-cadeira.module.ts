import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadeiraPageRoutingModule } from './modal-cadeira-routing.module';

import { ModalCadeiraPage } from './modal-cadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadeiraPageRoutingModule
  ],
  declarations: [ModalCadeiraPage]
})
export class ModalCadeiraPageModule {}
