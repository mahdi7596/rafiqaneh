import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss']
})
export class TimerCountdownComponent implements OnInit {

  @Input("remainedSeconds") remainedSeconds: number = 0;
  @Input() message = 'برای پاسخ دادن به سوالات این سری باید بعد از ۲۴ ساعت به سایت مراجعه کنی';

  constructor() { }

  ngOnInit(): void {
  }

  get hour() {
    if (this.remainedSeconds <= 0) return 0;
    return Math.floor(this.remainedSeconds/3600).toString().padStart(2, '0');
  }

  get minute() {
    if (this.remainedSeconds <= 0) return 0;
    return Math.floor((this.remainedSeconds % 3600)/60).toString().padStart(2, '0');
  }

  get second() {
    if (this.remainedSeconds <= 0) return 0;
    return Math.floor(this.remainedSeconds % 60).toString().padStart(2, '0');
  }

}
