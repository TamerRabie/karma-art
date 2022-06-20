import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IElementStyle} from "../../../proto/IElementStyle";
import {IAppLink} from "../../../proto/IAppLink";

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  @Input() sidebarStyle: IElementStyle | undefined | null;
  @Input() adminSideBarLinks: IAppLink[] | undefined | null;
  @Output() activeLink = new EventEmitter<IAppLink>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(link: IAppLink): void {
    this.activeLink.emit(link);
  }

}
