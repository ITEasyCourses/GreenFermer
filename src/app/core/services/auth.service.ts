import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/compat/app';
import { from, Observable, of } from 'rxjs';

import 'firebase/auth';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';
import { IAuthenticationUser } from '../interfaces/i-authentication-user';
import { RegistrationUserInterface } from '../interfaces/redistration-user.interface';

import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snack: MatSnackBar
  ) {}

  public signIn(email: string, password: string): Observable<any> {
    return of(
      this.afAuth.signInWithEmailAndPassword(email, password).catch(() => {
        this.snack.open('Email або пароль не вірні.', '', {
          verticalPosition: 'top',
          duration: 4000
        });
      })
    );
  }

  public signUp(user: RegistrationUserInterface): Observable<any> {
    const { userEmail, userPassword, userName, userSerName, userPhoneNumber } =
      user;
    return of(
      this.afAuth
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then((res: UserCredential) => {
          this.updateName(userName, userSerName);
          this.setUserData(res.user, userPhoneNumber, userName, userSerName);
        })
        .catch(() => {
          this.snack.open('Користувач з цим Email вже існуе.', '', {
            verticalPosition: 'top',
            duration: 4000
          });
        })
    );
  }

  public signWithGoogle(): Observable<any> {
    return from(
      this.afAuth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(() => {
          this.snack.open('Вхід через Google не вдався', '', {
            verticalPosition: 'top',
            duration: 4000
          });
        })
    );
  }

  public signOut(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  public deleteUser(): void {
    firebase.auth().currentUser?.delete();
  }

  public updateName(name: string, serName: string): void {
    firebase
      .auth()
      .currentUser?.updateProfile({ displayName: name + ' ' + serName });
  }

  public setUserData(user: any, phone: string, name: string, serName: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: IAuthenticationUser = {
      uid: user.uid,
      email: user.email,
      displayName: name + ' ' + serName,
      photoURL: user.photoURL,
      phone: phone
    };
    return userRef.set(userData, { merge: true });
  }
}
