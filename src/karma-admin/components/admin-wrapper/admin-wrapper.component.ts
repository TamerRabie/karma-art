import {Component, Input, OnInit} from '@angular/core';
import {IElementStyle} from "../../../proto/IElementStyle";

@Component({
  selector: 'admin-wrapper',
  templateUrl: './admin-wrapper.component.html',
  styleUrls: ['./admin-wrapper.component.css']
})
export class AdminWrapperComponent implements OnInit {
  @Input() wrapperStyle: IElementStyle | undefined | null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
