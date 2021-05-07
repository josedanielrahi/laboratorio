import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewdetalleComponent } from './newdetalle.component';

const routes: Routes = [{ path: '', component: NewdetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewdetalleRoutingModule { }
