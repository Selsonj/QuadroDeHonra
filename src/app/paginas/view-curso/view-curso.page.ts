import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modal/Curso';
import { Cadeira } from 'src/app/modal/Cadeira';
import { FirebaseService } from 'src/app/services/firebase.service';

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

  cadeira: Cadeira = {
    id: '',
    nome: ''
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
      this.fbService.getCurso(id).subscribe(cursoData => {
        this.curso = cursoData;
      });
    }
  }

  addCadeira(){
    this.fbService.addCadeira(this.curso.id).then(() => {
      this.router.navigateByUrl('view-curso');
    }, err => {

    });
  }

  deleteCurso(){
    this.fbService.deleteCurso(this.curso.id).then(() => {
      this.router.navigateByUrl('admin');
    })
  }

}
