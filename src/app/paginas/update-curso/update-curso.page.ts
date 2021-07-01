import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modal/Curso';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.page.html',
  styleUrls: ['./update-curso.page.scss'],
})
export class UpdateCursoPage implements OnInit {

  curso: Curso = {
    nome: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.fbService.getCurso(id).subscribe(cursoData => {
        this.curso = cursoData;
      });
    }
  }

  updateCurso(){
    this.fbService.updateCurso(this.curso.id).then(() => {
      this.router.navigateByUrl('/');
    })
  }
}