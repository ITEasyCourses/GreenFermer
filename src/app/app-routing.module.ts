import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Links } from './core/enums/links';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: Links.HOME,
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
