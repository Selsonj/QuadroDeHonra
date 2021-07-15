import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from '../modal/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  constructor(private fbService: FirebaseService) { }

  loginUser (email: string, password: string ): Promise<firebase.auth.UserCredential>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  cadastroUser (nomeU: string, emailU: string, passwordU: string, id: string): Promise<firebase.auth.UserCredential>{

    var user = {
      nome: nomeU,
      email: emailU,
      password: passwordU
    }
  
    this.fbService.cadastra(user,id).catch(error => {
      console.log(error.message)
    });

    return firebase.auth().createUserWithEmailAndPassword(emailU, passwordU);
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
}
