import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsrlistRoutingModule } from './usrlist-routing.module';
import { UsrlistComponent } from './usrlist.component';


@NgModule({
  declarations: [UsrlistComponent],
  imports: [
    CommonModule,
    UsrlistRoutingModule
  ]
})
export class UsrlistModule { }
