import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InvestorComponent } from './investor/investor.component';

const routes: Routes = [
  { path: '', component: InvestorComponent }
];

export const heavyStuffRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
