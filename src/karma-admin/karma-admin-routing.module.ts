import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KarmaAdminComponent} from './karma-admin.component';
import {DashboardLinkComponent} from "./links/dashboard-link/dashboard-link.component";
import {UsersLinkComponent} from "./links/users-link/users-link.component";
import {OrdersLinkComponent} from "./links/orders-link/orders-link.component";
import {ProductsLinkComponent} from "./links/products-link/products-link.component";
import {NotificationsLinkComponent} from "./links/notifications-link/notifications-link.component";

const routes: Routes = [
  {
    path: '',
    component: KarmaAdminComponent,
    children: [
      {path: '', component: DashboardLinkComponent},
      {path: 'Users', component: UsersLinkComponent},
      {path: 'Orders', component: OrdersLinkComponent},
      {path: 'Products', component: ProductsLinkComponent},
      {path: 'Notifications', component: NotificationsLinkComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KarmaAdminRoutingModule {
}
