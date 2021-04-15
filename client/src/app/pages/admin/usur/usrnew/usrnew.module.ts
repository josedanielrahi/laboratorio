import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsrnewRoutingModule } from './usrnew-routing.module';
import { UsrnewComponent } from './usrnew.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsrnewComponent],
  imports: [
    CommonModule,
    UsrnewRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsrnewModule { }
