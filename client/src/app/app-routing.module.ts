import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'prgramadetails', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detailsprof', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detailsprog', redirectTo: '/profhome', pathMatch: 'full'},
  {path: 'newdetalle', redirectTo: '/profhome', pathMatch: 'full'},
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
  { path: 'detailsprof/:id', loadChildren: () => import('./pages/admin/prof/details/details.module').then(m => m.DetailsModule) },
  { path: 'homepage', loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'prgramadetails/:id', loadChildren: () => import('./pages/admin/prof/programa/programa.module').then(m => m.ProgramaModule) },
  { path: 'detailsprog/:id', loadChildren: () => import('./pages/profe/programa/detalle/detalle.module').then(m => m.DetalleModule) },
  { path: 'newdetalle/:id', loadChildren: () => import('./pages/profe/programa/newdetalle/newdetalle.module').then(m => m.NewdetalleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
