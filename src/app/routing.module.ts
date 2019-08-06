import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { InvestorComponent } from './heavy-stuff/investor/investor.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'investor', component: InvestorComponent},
  // {
  //   path: '',
  //   component: SidebarComponent,
  //   outlet: 'sidebar'
  // },
  {
    path: 'products',
    // loadChildren: './heavy-stuff/heavy-stuff.module#HeavyStuffModule',
    loadChildren: () => import(`./heavy-stuff/heavy-stuff.module`).then(m => m.HeavyStuffModule),
    component: InvestorComponent,
    outlet: 'sidebar',
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
