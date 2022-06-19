import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KarmaHomeRoutingModule} from './karma-home-routing.module';
import {KarmaHomeComponent} from './karma-home.component';
import {HomeService} from "./services/HomeService";
import {AboutLinkComponent} from "./links/about-link/about-link.component";
import {PersonalizedgiftLinkComponent} from "./links/personalizedgift-link/personalizedgift-link.component";
import {ShopLinkComponent} from "./links/shop-link/shop-link.component";
import {ContactusLinkComponent} from "./links/contactus-link/contactus-link.component";
import {CommisionartLinkComponent} from "./links/commisionart-link/commisionart-link.component";
import {AppAnnouncementsComponent} from "./components/app-announcements/app-announcements.component";
import {AppSidebarComponent} from "./components/app-sidebar/app-sidebar.component";
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    KarmaHomeComponent,
    AppAnnouncementsComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AboutLinkComponent,
    CommisionartLinkComponent,
    ContactusLinkComponent,
    PersonalizedgiftLinkComponent,
    ShopLinkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    KarmaHomeRoutingModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    HomeService
  ]
})
export class KarmaHomeModule {
}
