import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsreditComponent } from './usredit.component';

const routes: Routes = [{ path: '', component: UsreditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsreditRoutingModule { }
