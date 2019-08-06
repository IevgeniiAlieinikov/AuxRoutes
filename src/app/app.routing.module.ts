import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import(`./product/product.module`).then(m => m.ProductModule)
  },
  {
    path: 'investor',
    loadChildren: () => import(`./investor/investor.module`).then(m => m.InvestorModule)},
  {
    path: '',
    loadChildren: () => import(`./shared/shared.module`).then(m => m.SharedModule),
    outlet: 'modal',
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
