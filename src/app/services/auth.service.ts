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
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  cadastroUser (email: string, password: string ): Promise<firebase.auth.UserCredential>{
    return firebase.auth().createUserWithEmailAndPassword(email, password);
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
