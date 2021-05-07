import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewdetalleRoutingModule } from './newdetalle-routing.module';
import { NewdetalleComponent } from './newdetalle.component';


@NgModule({
  declarations: [NewdetalleComponent],
  imports: [
    CommonModule,
    NewdetalleRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NewdetalleModule { }
