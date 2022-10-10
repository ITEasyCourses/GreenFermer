import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModalModule } from './core/components/modals/login-modal/login-modal.module';
import { SliderModule } from './core/components/slider/slider.module';
import { CatalogPageModule } from './pages/catalog-page/catalog-page.module';
import { CategoryPageModule } from './pages/category-page/category-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModalModule,
    CategoryPageModule,
    SliderModule,
    HomePageModule,
    CatalogPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
