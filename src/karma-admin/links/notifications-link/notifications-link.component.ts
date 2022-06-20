import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/AdminService";

@Component({
  selector: 'notifications-link',
  templateUrl: './notifications-link.component.html',
  styleUrls: ['./notifications-link.component.css']
})
export class NotificationsLinkComponent implements OnInit {

  constructor(public adminService: AdminService) {
  }

  ngOnInit(): void {
  }

}
