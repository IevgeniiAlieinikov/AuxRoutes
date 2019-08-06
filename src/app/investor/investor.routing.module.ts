import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InvestorComponent } from './components/investor/investor.component';

const routes: Routes = [
  { path: '', component: InvestorComponent },
];

export const InvestorRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
