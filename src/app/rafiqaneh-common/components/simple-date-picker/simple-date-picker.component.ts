import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDateModel } from './IDateModel';

interface SelectOption {
  text: string,
  value: number | null
}

@Component({
  selector: 'simple-date-picker',
  templateUrl: './simple-date-picker.component.html',
  styleUrls: ['./simple-date-picker.component.scss']
})
export class SimpleDatePickerComponent implements OnInit {

  @Input() minYear: number = 1300;
  @Input() maxYear: number = 1400;
  
  get date(): string|null 
  {
    let d = this.selectedDate;
    if (d.year != null && d.month != null && d.day != null)
    {
      return `${d.year}/${d.month}/${d.day}`;
    }
    return null;
  }
  @Input() set date(value: string|null) 
  {
    if (value != null)
    {
      let p = value.split('/');
      if (p.length == 3) {
        this.selectedDate.year = parseInt(p[0]);
        this.selectedDate.month = parseInt(p[1]);
        this.setDays(this.selectedDate.year, this.selectedDate.month);
        this.selectedDate.day = parseInt(p[2]);
      }
    }
  }

  years: SelectOption[] = [
    { text: 'سال', value: null }
  ]
  months: SelectOption[] = [
    { text: 'ماه', value: null },
    { text: 'فروردین', value: 1 },
    { text: 'اردیبهشت', value: 2 },
    { text: 'خرداد', value: 3 },
    { text: 'تیر', value: 4 },
    { text: 'مرداد', value: 5 },
    { text: 'شهریور', value: 6 },
    { text: 'مهر', value: 7 },
    { text: 'آبان', value: 8 },
    { text: 'آذر', value: 9 },
    { text: 'دی', value: 10 },
    { text: 'بهمن', value: 11 },
    { text: 'اسفند', value: 12 },
  ]
  days: SelectOption[] = [
    { text: 'روز', value: null }
  ]

  selectedDate: IDateModel = { year: null, month: null, day: null };
  numMonthDays: number = 0;

  @Output() dateChanged = new EventEmitter<IDateModel>();

  constructor() {
    for (let i = this.maxYear; i >= this.minYear; i--) {
      this.years.push({ text: `${i}`, value: i });
    }

    this.setDays(this.selectedDate.year, this.selectedDate.month);
  }

  isLeapYear(year: number) {
    let d = [1, 5, 9, 13, 17, 22, 26, 30];
    let a = year % 33;
    if (d.indexOf(a) !== -1)
      return true;
    else
      return false;
  }

  setDays(year: number | null, month: number | null) {
    let numMonthDays = month == null ? 0 : (month >= 1 && month <= 6) ? 31 : (month > 6 && month < 12) ? 30 : 29;
    if (year != null && month == 12 && this.isLeapYear(year))
      numMonthDays = 30;
    console.log(this.selectedDate);
    if (this.numMonthDays === numMonthDays) {
      return;
    }
    this.numMonthDays = numMonthDays;
    this.days = [{ text: `روز`, value: null }];
    for (let i = 1; i <= this.numMonthDays; i++) {
      this.days.push({ text: `${i}`, value: i });
    }
    console.log(this.selectedDate);
    if (this.selectedDate.day != null && this.selectedDate.day > this.numMonthDays) {
      this.selectedDate.day = null;
      console.log('day is not in range');
    }
  }
  ngOnInit(): void {
  }

  yearChanged(year: any) {
    console.log(year);
    this.selectedDate.year = year;
    this.setDays(this.selectedDate.year, this.selectedDate.month);
    this.dateChanged.emit(this.selectedDate);
  }

  monthChanged(m: number | null) {
    this.selectedDate.month = m;
    this.setDays(this.selectedDate.year, this.selectedDate.month);
    this.dateChanged.emit(this.selectedDate);
  }

  dayChanged(day: number | null) {
    this.selectedDate.day = day;    
    console.log('day changed', day);
    this.dateChanged.emit(this.selectedDate);
  }
}
