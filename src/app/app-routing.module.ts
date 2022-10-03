import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-order-page',
    loadChildren: () =>
      import('./pages/my-orders-page/my-orders-page.module').then(
        (m) => m.MyOrdersPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
