import { NgModule } from '@angular/core';

import { InvestorComponent } from './components/investor/investor.component';
import { InvestorRoutingModule } from './investor.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InvestorComponent],
  imports: [InvestorRoutingModule, CommonModule],
  entryComponents: [InvestorComponent]
})
export class InvestorModule { }
