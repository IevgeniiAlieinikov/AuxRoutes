import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'details/:id', component: ProductDetailComponent },
  { path: 'list', component: ProductListComponent }
];

export const productRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
