import { CardComponent } from './../../../../components/share/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramaRoutingModule } from './programa-routing.module';
import { ProgramaComponent } from './programa.component';


@NgModule({
  declarations: [ProgramaComponent],
  imports: [
    CommonModule,
    ProgramaRoutingModule,
    CommonModule,
  ],
})
export class ProgramaModule { }
