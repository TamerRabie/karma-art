import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/User";
import {AppRoutesService} from "../../../helpers/AppRoutesService";

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  @Input() user: User | undefined | null;
  @Input() anonymousAvatar: string | null | undefined;
  @Output() toggleSidebar = new EventEmitter();

  constructor(public appRoutesService: AppRoutesService) {
  }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.toggleSidebar.emit();
  }

}
