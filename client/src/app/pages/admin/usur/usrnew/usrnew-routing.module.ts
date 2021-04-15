import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsrnewComponent } from './usrnew.component';

const routes: Routes = [{ path: '', component: UsrnewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsrnewRoutingModule { }
