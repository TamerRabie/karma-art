import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppOverlayComponent} from "./app-overlay/app-overlay.component";
import {AppLoaderComponent} from './app-loader/app-loader.component';
import {AppMessagesComponent} from './app-messages/app-messages.component';
import {ConfirmMessageComponent} from './confirm-message/confirm-message.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppOverlayComponent,
    AppLoaderComponent,
    AppMessagesComponent,
    ConfirmMessageComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AppLoaderComponent,
    AppOverlayComponent,
  ]
})
export class SharedModule {
}
