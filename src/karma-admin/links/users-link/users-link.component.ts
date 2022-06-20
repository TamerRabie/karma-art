import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/AdminService";

@Component({
  selector: 'users-link',
  templateUrl: './users-link.component.html',
  styleUrls: ['./users-link.component.css']
})
export class UsersLinkComponent implements OnInit {

  constructor(public adminService: AdminService) {
  }

  ngOnInit(): void {
  }

}
