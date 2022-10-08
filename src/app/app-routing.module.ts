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
    path: 'product-detail',
    loadChildren: () =>
      import('./pages/product-detail-page/product-detail-page.module').then(
        (m) => m.ProductDetailPageModule
      )
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      )
  },
  {
    path: ERoutes.catalogPage,
    loadChildren: () =>
      import('./pages/catalog-page/catalog-page.module').then(
        (m) => m.CatalogPageModule
      )
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
