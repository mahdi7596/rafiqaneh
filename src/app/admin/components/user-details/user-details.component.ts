import { Component, Input, OnInit } from '@angular/core';
import { IranProvinces } from 'src/app/rafiqaneh-common/models/provinces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }
  province(p?: number) {
    if (p === undefined) return '';
    return IranProvinces.find(s => s.code == p)?.name;
  }
  formatDate(ts: number) {
    return new Date(ts * 1000).toDateString();
  }

  avatar(url: string) {
    if (url) {
      return environment.apiUrl + '/' + url;
    }
    return '';
  }
}
