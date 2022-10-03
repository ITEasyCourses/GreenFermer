import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: ERoutes.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
