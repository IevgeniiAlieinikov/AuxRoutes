import { NgModule } from '@angular/core';
import { RoutableModalComponent } from './routable-modal/routable-modal.component';
import { sharedRoutingModule } from './shared.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RoutableModalComponent],
  imports: [
    sharedRoutingModule, CommonModule
  ],
  entryComponents: [RoutableModalComponent]
})
export class SharedModule { }
