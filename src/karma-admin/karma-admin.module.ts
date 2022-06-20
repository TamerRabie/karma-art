import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KarmaAdminRoutingModule} from './karma-admin-routing.module';
import {KarmaAdminComponent} from './karma-admin.component';
import {AdminService} from "./services/AdminService";
import {AdminFooterComponent} from './components/admin-footer/admin-footer.component';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminSidebarComponent} from './components/admin-sidebar/admin-sidebar.component';
import {AdminWrapperComponent} from './components/admin-wrapper/admin-wrapper.component';
import {DashboardLinkComponent} from './links/dashboard-link/dashboard-link.component';
import {NotificationsLinkComponent} from './links/notifications-link/notifications-link.component';
import {OrdersLinkComponent} from './links/orders-link/orders-link.component';
import {ProductsLinkComponent} from './links/products-link/products-link.component';
import {UsersLinkComponent} from './links/users-link/users-link.component';
import {SharedModule} from "../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    KarmaAdminComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminWrapperComponent,
    DashboardLinkComponent,
    NotificationsLinkComponent,
    OrdersLinkComponent,
    ProductsLinkComponent,
    UsersLinkComponent
  ],
  imports: [
    CommonModule,
    KarmaAdminRoutingModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule
  ],
  providers: [
    AdminService
  ]
})
export class KarmaAdminModule {
}
