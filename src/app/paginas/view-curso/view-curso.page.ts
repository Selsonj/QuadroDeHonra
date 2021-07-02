import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modal/Curso';
import { Cadeira } from 'src/app/modal/Cadeira';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';

@Component({
  selector: 'app-view-curso',
  templateUrl: './view-curso.page.html',
  styleUrls: ['./view-curso.page.scss'],
})
export class ViewCursoPage implements OnInit {

  curso: Curso = {
    id: '',
    nome: ''
  };

  private cadeiras: Observable<Cadeira[]>;

  constructor(
    private activateRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    this.cadeiras = this.fbService.getCadeiras(id);  
  }

  // Modal

  async _openModal()
  {
    const ids = this.activateRoute.snapshot.paramMap.get('id');

    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        "id": ids
      },

      cssClass: 'my-modal-component'
    })

    return await modal.present();
  }

  ngAfterViewInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
      this.fbService.getCurso(id).subscribe(cursoData => {
        this.curso = cursoData;
      });
    }
  }

  deleteCurso(){
    this.fbService.deleteCurso(this.curso.id).then(() => {
      this.router.navigateByUrl('admin');
    })
  }

}
