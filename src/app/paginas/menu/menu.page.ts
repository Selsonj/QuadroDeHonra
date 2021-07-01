import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { IonicPage, NavController, NavParams, NavComponentWithProps, App, Nav } from '@ionic/angular';
import { NavController, NavParams, NavComponentWithProps } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

//@IonicPage()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  
  username = '';
  pages = [];

@ViewChild('content') nav: NavController
public rootPage: any;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private authService: AuthService
  ) { }

  ionViewWillEnter(){
    if(this.authService.isAdmin()){
      this.pages = [
        {title: 'Admin Dasboard', page: 'admin', icon: 'home'}
      ];
      this.openPage('admin');
    }
    else{
      this.pages = [
        {title: 'User Dashboard', page: 'user', icon: 'home'}
      ];
      this.openPage('user')
    }
    //this.username = this.authService.currentUser.nome;
  }

  openPage(page){
    //this.router.navigateByUrl(page);
    this.nav.navigateRoot(page);
  }

  logout(){
    this.authService.logoutUser();
    this.router.navigateByUrl('login');
  }

  ionViewCanEnter(){
    return this.authService.isLoggedIn();
  }

}
