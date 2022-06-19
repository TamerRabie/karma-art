import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KarmaHomeComponent} from './karma-home.component';

const routes: Routes = [{path: '', component: KarmaHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KarmaHomeRoutingModule {
}
