import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){

  }

  logout()
  {
    this.authService.logoutUser();
    this.router.navigateByUrl('login');
  }

}
