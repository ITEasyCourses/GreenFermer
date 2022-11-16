import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoutes } from 'src/app/core/enums/routes';

import { CheckoutResultGuard } from './core/guards/checkout-result.guard';

const routes: Routes = [
  {
    path: ERoutes.HOME,
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => m.HomePageModule)
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
    path: ERoutes.MY_ORDER_PAGE,
    loadChildren: () =>
      import('./pages/my-order-page/my-order-page.module').then(
        (m) => m.MyOrderPageModule
      )
  },
  {
    path: ERoutes.CHECKOUT_RESULT,
    loadChildren: () =>
      import('./pages/checkout-result-page/checkout-result-page.module').then(
        (m) => m.CheckoutResultPageModule
      ),
    canActivate: [CheckoutResultGuard]
  },
  {
    path: '**',
    redirectTo: ERoutes.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CheckoutResultGuard]
})
export class AppRoutingModule {}
