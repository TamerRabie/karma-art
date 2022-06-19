import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './app-announcements.component.html',
  styleUrls: ['./app-announcements.component.scss']
})
export class AppAnnouncementsComponent implements OnInit {
  @Input() announcements: string | undefined | null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
