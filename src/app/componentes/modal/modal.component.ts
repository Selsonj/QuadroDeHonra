import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Cadeira } from 'src/app/modal/Cadeira';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  cadeira: Cadeira = {
    nome: ''
  };

  @Input() id: string;

  constructor(private modalCtrl: ModalController,
              private fbService: FirebaseService) { }

  ngOnInit() {}

  addCadeira(form){
    this.cadeira.nome = form.value.nome;
    this.fbService.addCadeira(this.cadeira, this.id).then(() => {
      this.modalCtrl.dismiss()
    }, err => {

    });
  }

  _dismiss(){
    this.modalCtrl.dismiss()
  }

}
