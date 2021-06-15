import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FOTESH98Component } from './fotesh98.component';

const routes: Routes = [{ path: '', component: FOTESH98Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FOTESH98RoutingModule { }
