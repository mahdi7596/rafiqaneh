import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  @Input() ticket: any;

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(ts: number) {
    return new Date(ts * 1000).toDateString();
  }

  stations(completed: any) {
    let s = [];
    for (let i in completed) {
      switch (i) {
        case 'job':
          s.push({ name: 'کارمون', score: completed[i] });
          break;
        case 'family':
          s.push({ name: 'زیمون', score: completed[i] });
          break;
        case 'poletical':
          s.push({ name: 'همساز', score: completed[i] });
          break;
        case 'adrenaline':
          s.push({ name: 'آدرنالین', score: completed[i] });
          break;
      }
    }
    return s;
  }
}
