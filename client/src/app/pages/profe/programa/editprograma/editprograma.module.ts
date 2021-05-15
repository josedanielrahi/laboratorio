import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditprogramaRoutingModule } from './editprograma-routing.module';
import { EditprogramaComponent } from './editprograma.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditprogramaComponent],
  imports: [
    CommonModule,
    EditprogramaRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditprogramaModule { }
//value="{{register?.carreraId}}"