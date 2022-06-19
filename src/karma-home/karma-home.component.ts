import {Component, OnInit} from '@angular/core';
import {HomeService} from "./services/HomeService";
import {AuthService} from "../services/AuthService";

@Component({
  selector: 'karma-home',
  templateUrl: './karma-home.component.html',
  styleUrls: ['./karma-home.component.css']
})
export class KarmaHomeComponent implements OnInit {

  constructor(public homeService: HomeService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
