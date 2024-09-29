import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss'],
})
export class QuestionBoxComponent implements OnInit {
  @Input() icon?: string;
  @Input() content?: string;
  @Input() currentAns?: string;
  @Output() currentAnsChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() onToggle = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  callToggle() {
    this.onToggle.emit();
  }

  callSubmit() {
    console.log('question submitted: ', this.currentAns);
    this.onSubmit.emit();
  }
}
