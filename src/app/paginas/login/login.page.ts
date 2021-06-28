import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Curso } from 'src/app/modal/Curso';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  curso: Curso = {
    email: '',
    password: ''  
    }

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

    ngOnInit() {
    }

    async loginUser(curso:Curso): Promise<void> {
      console.log(curso.email);
      console.log(curso.password);
      this.authService.loginUser(curso.email, curso.password).then(
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

  

}
