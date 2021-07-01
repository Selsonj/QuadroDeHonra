import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../modal/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  constructor() { }

  loginUser (email: string, password: string ): Promise<firebase.auth.UserCredential>{
   /* if(email === 'joaoselson@gmail.com' && password === 'Quadro'){
      this.currentUser.nome = 'Admin';
      this.currentUser.role = 0;
    }
    else
    {
      this.currentUser.nome = 'Utilizador';
      this.currentUser.role = 1;
    }*/
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  resetPassword(email:string): Promise<void>
  {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

  isLoggedIn(){
    return this.currentUser != null;
  }

  isAdmin(){
    return this.currentUser.role === 0;
  }

}
