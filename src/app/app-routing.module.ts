import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingPath } from './core/enums/routing-path';

const routes: Routes = [
  {
    path: RoutingPath.catalogPage,
    loadChildren: () =>
      import('./pages/catalog-page/catalog-page.module').then(
        (m) => m.CatalogPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
