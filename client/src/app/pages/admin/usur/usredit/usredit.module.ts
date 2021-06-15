import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsreditRoutingModule } from './usredit-routing.module';
import { UsreditComponent } from './usredit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsreditComponent],
  imports: [
    CommonModule,
    UsreditRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsreditModule { }
