import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KarmaAdminRoutingModule} from './karma-admin-routing.module';
import {KarmaAdminComponent} from './karma-admin.component';


@NgModule({
  declarations: [
    KarmaAdminComponent
  ],
  imports: [
    CommonModule,
    KarmaAdminRoutingModule
  ]
})
export class KarmaAdminModule {
}
