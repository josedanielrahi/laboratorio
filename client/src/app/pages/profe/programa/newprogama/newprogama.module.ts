import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewprogamaRoutingModule } from './newprogama-routing.module';
import { NewprogamaComponent } from './newprogama.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewprogamaComponent],
  imports: [
    CommonModule,
    NewprogamaRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NewprogamaModule { }
