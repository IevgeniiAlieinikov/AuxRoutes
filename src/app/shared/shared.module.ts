import { NgModule } from '@angular/core';
import { RoutableModalComponent } from './routable-modal/routable-modal.component';
import { SharedRoutingModule } from './shared.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RoutableModalComponent],
  imports: [
    SharedRoutingModule, CommonModule
  ],
  entryComponents: [RoutableModalComponent]
})
export class SharedModule { }
