import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/modal/Curso';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  private cursos: Observable<Curso[]>;

  constructor(private fbService: FirebaseService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.cursos = this.fbService.getCursos();  
  }

  logout()
  {
    this.authService.logoutUser();
    this.router.navigateByUrl('login');
  }

}
