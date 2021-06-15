import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsrlistRoutingModule } from './usrlist-routing.module';
import { UsrlistComponent } from './usrlist.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [UsrlistComponent],
  imports: [
    CommonModule,
    UsrlistRoutingModule,
    NgxPaginationModule,
  ]
})
export class UsrlistModule { }
