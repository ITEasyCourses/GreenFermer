import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/compat/app';
import { from, Observable, of, take } from 'rxjs';

import 'firebase/auth';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';
import { LoginModalComponent } from '../components/modals/login-modal/login-modal.component';
import { RegistrationModalComponent } from '../components/modals/registration-modal/registration-modal.component';
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
    private snack: MatSnackBar,
    private dialogRef: MatDialogRef<
      LoginModalComponent,
      RegistrationModalComponent
    >,
    private matDialog: MatDialog
  ) {}

  public signIn(email: string, password: string): Observable<any> {
    return of(
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .catch(() => {
          this.message('Email або пароль не вірні.');
        })
        .then(() => {
          this.findUser();
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
          this.message('Користувач з цим Email вже існуе.');
        })
        .then(() => {
          this.findUserByRegistration();
        })
    );
  }

  public signWithGoogle(): Observable<any> {
    return from(
      this.afAuth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(() => {
          this.message('Вхід через Google не вдався');
        })
        .then(() => {
          this.findUser();
        })
    );
  }

  public signOut(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  public updateName(name: string, serName: string): void {
    firebase
      .auth()
      .currentUser?.updateProfile({ displayName: name + ' ' + serName });
  }

  public setUserData(
    user: any,
    phone: string,
    name: string,
    serName: string
  ): void {
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
    userRef.set(userData, { merge: true });
  }

  public findUser(): void {
    this.afAuth.authState.subscribe((res) => {
      if (res) {
        this.matDialog.closeAll();
      }
    });
  }

  public findUserByRegistration(): void {
    this.afAuth.authState.pipe(take(1)).subscribe((res) => {
      if (res) {
        this.message('Вітаю! ви зареестровані!');
        this.signOut();
        this.matDialog.closeAll();
        const loginDialogConfig = new MatDialogConfig();
        this.matDialog.open(LoginModalComponent, loginDialogConfig);
      }
    });
  }

  public message(text: string): void {
    this.snack.open(text, '', {
      duration: 4000,
      verticalPosition: 'top'
    });
  }

  public deleteUser(userId: string | undefined): void {
    firebase.auth().currentUser?.delete();
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${userId}`
    );
    userRef.delete();
  }
}
