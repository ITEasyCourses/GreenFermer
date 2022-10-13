import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

const routes: Routes = [
  {
    path: ERoutes.HOME,
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: ERoutes.PRODUCT_DETAIL,
    loadChildren: () =>
      import('./pages/product-detail-page/product-detail-page.module').then(
        (m) => m.ProductDetailPageModule
      )
  },
  {
    path: ERoutes.CATEGORY,
    loadChildren: () =>
      import('./pages/category-page/category-page.module').then(
        (m) => m.CategoryPageModule
      )
  },
  {
    path: ERoutes.CHECKOUT,
    loadChildren: () =>
      import('./pages/checkout-page/checkout-page.module').then(
        (m) => m.CheckoutPageModule
      )
  },
  {
    path: ERoutes.CATALOG_PAGE,
    loadChildren: () =>
      import('./pages/catalog-page/catalog-page.module').then(
        (m) => m.CatalogPageModule
      )
  },
  {
    path: ERoutes.CHECKOUT_RESULT,
    loadChildren: () =>
      import('./pages/checkout-result-page/checkout-result-page.module').then(
        (m) => m.CheckoutResultPageModule
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
