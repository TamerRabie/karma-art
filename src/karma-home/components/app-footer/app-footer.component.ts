import {Component, OnInit} from '@angular/core';
import {AppRoutesService} from "../../../helpers/AppRoutesService";

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  constructor(public appRoutesService: AppRoutesService) {
  }

  ngOnInit(): void {
  }

}
