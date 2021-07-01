import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

    ngOnInit() {

      firebase.auth().onAuthStateChanged(function(user) {
        
        if(user)
        {
          let self = this;
          const userEmail = user.email;
          if(userEmail == "joaoselson@gmail.com"){
            self.router.navigateByUrl('admin');
          }
          else
          self.router.navigateByUrl('user');
        }
     });
    }

    async loginUser(form): Promise<void> {
      
      this.authService.loginUser(form.value.email, form.value.password).then(
        () => {
          let self = this;
          firebase.auth().onAuthStateChanged(function(user) {  
              const userEmail = user.email;
              if(userEmail == "joaoselson@gmail.com"){
                self.router.navigateByUrl('admin');
              }
              else
               self.router.navigateByUrl('user');
         });
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

    goToReset(){
      this.router.navigateByUrl('password-reset');
    }

    goToCadastro(){
      this.router.navigateByUrl('cadastro');
    }
}