import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import 'firebase/firestore';


import { map } from 'rxjs/operators';
import { Usuario } from '../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  //change autenticación
  initAuthListener() {
    this.auth.authState.subscribe(fuser => {
      console.log(fuser);
      console.log(fuser?.uid);
      console.log(fuser?.email);
    })

  }

  newUser(name: string, password: string, email: string) {
    // console.log({ name, password, email });

    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const newUsers = new Usuario(user!.uid, name, user!.email);

        return this.firestore.doc(`${user!.uid}/usuario`).set({ ...newUsers });
      });
  }

  loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(
      map(fbUser => fbUser != null))
  }
}
