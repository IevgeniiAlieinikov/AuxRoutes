import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RoutableModalComponent } from './shared/routable-modal/routable-modal.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import(`./product/product.module`).then(m => m.ProductModule)
  },
  {
    path: 'investor',
    loadChildren: () => import(`./investor/investor.module`).then(m => m.InvestorModule)},
  {
    path: 'rm',
    loadChildren: () => import(`./shared/shared.module`).then(m => m.SharedModule),
    outlet: 'modal',
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
