import {Component, HostListener, OnInit} from '@angular/core';
import {AdminService} from "./services/AdminService";
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'karma-admin',
  templateUrl: './karma-admin.component.html',
  styleUrls: ['./karma-admin.component.css']
})
export class KarmaAdminComponent implements OnInit {

  constructor(public adminService: AdminService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.adminService.workInit();
  }

  @HostListener('window:resize')
  onWindowChange(): any {
    this.adminService.workInit();
  }

}
