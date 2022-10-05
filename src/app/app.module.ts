import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryPaymentModule } from './core/components/delivery-payment/delivery-payment.module';
import { RadioGroupComponentModule } from './core/components/radio-group-component/radio-group-component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RadioGroupComponentModule,
    DeliveryPaymentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
