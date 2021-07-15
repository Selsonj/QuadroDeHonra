import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/modal/Curso';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private cursos: Observable<Curso[]>;

   itemId: string;

  constructor(
    private authService: AuthService,
    private fbService: FirebaseService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.cursos = this.fbService.getCursos();
  }

  async cadastro(form): Promise<void> {
    
      console.log(this.itemId);
    
    this.authService.cadastroUser(form.value.nome, form.value.email, form.value.password, this.itemId).then(
      () => {
             this.router.navigateByUrl('user');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{text: 'Ok', role: 'Cancelar'}],
        });
        await alert.present();
      }
    );
  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }
}
