import {  ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditdetailsRoutingModule } from './editdetails-routing.module';
import { EditdetailsComponent } from './editdetails.component';


@NgModule({
  declarations: [EditdetailsComponent],
  imports: [
    CommonModule,
    EditdetailsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class EditdetailsModule { }
