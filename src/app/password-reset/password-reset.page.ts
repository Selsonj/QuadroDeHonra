import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async resetPassword(form): Promise<void> {
    this.authService.resetPassword(form.value.email).then(
      async () => {
        const alert = await this.alertCtrl.create({
          message: 'Verifica o teu email para restaurar a senha.',
          buttons: [{text: 'Ok', role: 'Cancelar', handler:() => {
            this.router.navigateByUrl('login');
          },},],
        });
        await alert.present();
      },
      async error => {
        const errorAlert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{text: 'Ok', role: 'Cancelar'}],
        });
        await errorAlert.present();
      }
    );
  }
}