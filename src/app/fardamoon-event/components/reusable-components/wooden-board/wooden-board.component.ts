import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wooden-board',
  templateUrl: './wooden-board.component.html',
  styleUrls: ['./wooden-board.component.scss'],
})
export class WoodenBoardComponent implements OnInit {
  @Input() questionTitle = '';
  @Input() planetImage?: string;
  @Input() lastQuestion?: boolean;
  @Input() firstQuestion?: boolean;

  @Output() nextBtn = new EventEmitter();
  @Output() preBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  callNextClick() {
    this.nextBtn.emit();
  }

  callPreClick() {
    this.preBtn.emit();
  }
}
