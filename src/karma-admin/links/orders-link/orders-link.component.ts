import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/AdminService";

@Component({
  selector: 'orders-link',
  templateUrl: './orders-link.component.html',
  styleUrls: ['./orders-link.component.css']
})
export class OrdersLinkComponent implements OnInit {

  constructor(public adminService: AdminService) {
  }

  ngOnInit(): void {
  }

}
