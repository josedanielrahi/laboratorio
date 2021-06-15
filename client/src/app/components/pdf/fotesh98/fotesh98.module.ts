import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FOTESH98RoutingModule } from './fotesh98-routing.module';
import { FOTESH98Component } from './fotesh98.component';


@NgModule({
  declarations: [FOTESH98Component],
  imports: [
    CommonModule,
    FOTESH98RoutingModule
  ]
})
export class FOTESH98Module { }
