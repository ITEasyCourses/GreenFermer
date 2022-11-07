import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/components/footer/footer.module';
import { HeaderComponentModule } from './core/components/header-component/header-component.module';
import { LoginModalModule } from './core/components/modals/login-modal/login-modal.module';
import { PurchaseModalModule } from './core/components/modals/purchase-modal/purchase-modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModalModule,
    HeaderComponentModule,
    FooterModule,
    PurchaseModalModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class AppModule {}
