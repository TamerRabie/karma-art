import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/AdminService";

@Component({
  selector: 'products-link',
  templateUrl: './products-link.component.html',
  styleUrls: ['./products-link.component.css']
})
export class ProductsLinkComponent implements OnInit {

  constructor(public adminService: AdminService) {
  }

  ngOnInit(): void {
  }

}
