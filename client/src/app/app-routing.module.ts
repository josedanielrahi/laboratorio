import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/admin/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: 'usrnew', loadChildren: () => import('./pages/admin/usur/usrnew/usrnew.module').then(m => m.UsrnewModule) },
  { path: 'usrlist', loadChildren: () => import('./pages/admin/usur/usrlist/usrlist.module').then(m => m.UsrlistModule) },
  { path: 'proflist', loadChildren: () => import('./pages/admin/prof/list/list.module').then(m => m.ListModule) },
  { path: 'newprograma', loadChildren: () => import('./pages/profe/programa/newprogama/newprogama.module').then(m => m.NewprogamaModule) },
  { path: 'profhome', loadChildren: () => import('./pages/profe/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
