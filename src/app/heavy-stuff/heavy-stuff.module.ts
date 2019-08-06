import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorComponent } from './investor/investor.component';
import { heavyStuffRoutingModule } from './routing.module';

@NgModule({
  declarations: [InvestorComponent],
  entryComponents: [InvestorComponent],
  imports: [
    CommonModule, heavyStuffRoutingModule
  ]
})
export class HeavyStuffModule { }
