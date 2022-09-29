import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { ShoppingCart } from 'angular-feather/icons';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './core/components/cart/cart.module';

const icons = {
  ShoppingCart
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CartModule,
    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
