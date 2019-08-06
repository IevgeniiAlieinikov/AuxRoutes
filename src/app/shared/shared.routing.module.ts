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
      }
    ]
  }
];

export const sharedRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
