import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RoutableModalComponent } from './routable-modal/routable-modal.component';

const routes: Routes = [
  {
    path: '',
    component: RoutableModalComponent,
    children: [
      {
        path: 'investor-view',
        loadChildren: () => import(`../investor/investor.module`).then(m => m.InvestorModule)
      },
      {
        path: 'product',
        loadChildren: () => import(`../product/product.module`).then(m => m.ProductModule)
      }
    ]
  }
];

export const SharedRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
