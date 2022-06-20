import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/AdminService";
import {AppRoutesService} from "../../../helpers/AppRoutesService";

@Component({
  selector: 'dashboard-link',
  templateUrl: './dashboard-link.component.html',
  styleUrls: ['./dashboard-link.component.css']
})
export class DashboardLinkComponent implements OnInit {

  constructor(public adminService: AdminService,
              private appRoutesService: AppRoutesService) {

  }

  ngOnInit(): void {

  }

}
