import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-shinny-button',
  templateUrl: './shinny-button.component.html',
  styleUrls: ['./shinny-button.component.scss'],
})
export class ShinnyButtonComponent implements OnInit {
  @Input() title = 'دکمه شاینی';
  @Input() tooltipContent = 'متن تولتیپ';
  // @Input() tooltipPosition = '';
  @Input() classes = '';
  @Input() icon?: string;

  @Output() guideUsers = new EventEmitter();

  @ViewChild('startGuide')
  startGuideButton!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  callGuideUser() {
    this.guideUsers.emit();
  }
}
