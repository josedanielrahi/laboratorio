import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprogramaComponent } from './editprograma.component';

const routes: Routes = [{ path: '', component: EditprogramaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditprogramaRoutingModule { }
