import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../services/AuthGuard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../karma-home/karma-home.module').then(m => m.KarmaHomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Admin',
    loadChildren: () => import('../karma-admin/karma-admin.module').then(m => m.KarmaAdminModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
