import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment from 'jalali-moment';
import { IDatePickerConfig, IDatePickerDirectiveConfig } from 'ngx-farsi-datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, OnChanges {

  @Input('date') date: string | null = '';
  @Input('placeholder') placeholder?: string;
  @Output('changed') dateChanged = new EventEmitter<any>();

  dateObject = moment('1395/11/22', 'jYYYY,jMM,jDD');
  config: IDatePickerConfig = {
    format: 'jYYYY/jMM/jDD'
  };

  dvConfig: IDatePickerDirectiveConfig = {
    format: 'jYYYY/jMM/jDD'
  };

  constructor() {

  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["date"]) {
      if (this.date) {
        this.dateObject = moment(this.date, 'jYYYY,jMM,jDD');
      }
    }
  }

  changed(event: any) {
    console.log(event, this.dateObject);
    this.dateChanged.next(this.dateObject);
  }

}
