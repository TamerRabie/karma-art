import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from "../../../models/User";
import {IAppLink} from "../../../proto/IAppLink";
import {AppRoutesService} from "../../../helpers/AppRoutesService";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppHeaderComponent implements OnInit {
  @Input() user: User | null | undefined;
  @Input() logo: string | null | undefined;
  @Input() anonymousAvatar: string | null | undefined;
  @Input() headerLinks: IAppLink[] | null | undefined;
  @Output() activeLink = new EventEmitter<IAppLink>();
  @Output() openSidebar = new EventEmitter<boolean>();
  @Output() signOut = new EventEmitter();
  @Output() signIn = new EventEmitter();

  constructor(public appRoutesService: AppRoutesService) {
  }

  ngOnInit(): void {
  }

  onSelect(link: IAppLink): void {
    this.activeLink.emit(link);
  }

  onOpen(): void {
    this.openSidebar.emit(true);
  }

  onSignIn(): void {
    this.signIn.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }

}
