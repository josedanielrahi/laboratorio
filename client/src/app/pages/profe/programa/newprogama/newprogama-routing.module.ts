import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewprogamaComponent } from './newprogama.component';

const routes: Routes = [{ path: '', component: NewprogamaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewprogamaRoutingModule { }
