import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import{auth} from 'firebase/app';
import {first} from 'rxjs/operators'
@Injectable()
export class AuthService {
  public user:User;

  constructor(public afAuth: AngularFireAuth) { }

  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    catch(error){console.log(error)}
  }

  async resetPassword(email:string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){
      console.log(error)
    }
  }

  async sendVerificationEmail():Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email:string, password:string){
    try{
      const result= await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){console.log(error)};
 }
  async register(email:string, password:string){
    try{
      const result=await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return result;
    }
    catch(error){console.log(error)};
 }
  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
