import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Curso } from 'src/app/modal/Curso';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.page.html',
  styleUrls: ['./add-curso.page.scss'],
})
export class AddCursoPage implements OnInit {

  curso: Curso = {
    id: '',
    nome: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCurso(){
    this.fbService.addCurso(this.curso).then(() => {
      this.router.navigateByUrl('admin');
    }, err => {

    });
  }

}
