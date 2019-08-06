import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { productRoutingModule } from './product.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  entryComponents: [ProductListComponent, ProductDetailComponent],
  imports: [productRoutingModule, CommonModule]
})
export class ProductModule { }
