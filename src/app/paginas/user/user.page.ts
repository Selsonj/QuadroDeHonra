import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Rank } from 'src/app/modal/Rank';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  private ranks: Observable<Rank[]>;
 
  constructor(private authService: AuthService, private router: Router, private fbService: FirebaseService) { }

  ngOnInit(){
    this.ranks = this.fbService.getRanks(); 
  }

  logout()
  {
    this.authService.logoutUser();
    this.router.navigateByUrl('login');
  }

}
