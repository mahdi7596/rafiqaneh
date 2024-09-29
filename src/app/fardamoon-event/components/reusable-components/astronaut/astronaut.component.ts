import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss'],
})
export class AstronautComponent implements OnInit {
  @Input() content = `رفیقانه`;
  @Input() activeContent?: string = `رفیقانه با کلاس اکتیو`;
  @Input() restOfContent?: string = `ادامه مطلب رفیقانه`;
  constructor() {}

  ngOnInit(): void {}
}
