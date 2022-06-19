import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {IAppLink} from "../../../proto/IAppLink";

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppSidebarComponent implements OnInit {
  @Input() show: boolean | null | undefined;
  @Input() headerLinks: IAppLink[] | null | undefined;
  @Output() activeLink = new EventEmitter<IAppLink>();
  @Output() closeSidebar = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(link: IAppLink): void {
    this.activeLink.emit(link);
  }

  onClose(): void {
    this.closeSidebar.emit(false);
  }

}
