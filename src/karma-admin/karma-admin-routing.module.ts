import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KarmaAdminComponent} from './karma-admin.component';

const routes: Routes = [{path: '', component: KarmaAdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KarmaAdminRoutingModule {
}
