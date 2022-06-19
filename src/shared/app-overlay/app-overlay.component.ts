import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './app-overlay.component.html',
  styleUrls: ['./app-overlay.component.scss']
})
export class AppOverlayComponent implements OnInit {
  @Input() show: boolean | undefined | null;
  @Output() closeSideBar = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCLick(): void {
    this.closeSideBar.emit(false);
  }

}
