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
  selector: 'app-neon-button',
  templateUrl: './neon-button.component.html',
  styleUrls: ['./neon-button.component.scss'],
})
export class NeonButtonComponent implements OnInit {
  @Input() title = '';
  @Input() tooltipContent = 'متن تولتیپ';
  // @Input() tooltipPosition = '';
  @Input() classes = '';
  @Input() icon?: string;

  @Output() neonBtn = new EventEmitter();

  @ViewChild('startBtn')
  startGuideButton!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  callNeonButton() {
    this.neonBtn.emit();
  }
}
