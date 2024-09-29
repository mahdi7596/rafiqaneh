import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IranProvinces } from 'src/app/rafiqaneh-common/models/provinces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-karmoon-users',
  templateUrl: './karmoon-users.component.html',
  styleUrls: ['./karmoon-users.component.scss']
})
export class KarmoonUsersComponent implements OnInit {

  skip = 0;
  take = 10;
  pageIndex = 0;
  totalCount = 0;
  //filter?: {q: 'mobileNumber'|'nationalCode', value: string};
  filter = {
    mobileNumber: null,
    nationalCode: null,
    name: null,
    ticket: null,
    province: null,
    age: null,
    isSelected: <boolean|null>null
  };

  sort = {
    active: 'id',
    direction: 'asc'
  };

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobileNumber', 'score', 'createdAt', 'province', 'age', 'operations'];
  dataSource = new MatTableDataSource<any>([]);

  provinces: {name: string, code: number|null}[] = [];

  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute) { 

      activeRoute.queryParams.subscribe(s => {
        let page = s["page"];
        let pageSize = s["pageSize"];
        this.filter.mobileNumber = s["mobileNumber"] ?? null;
        this.filter.nationalCode = s["nationalCode"] ?? null;
        this.filter.ticket = s["ticket"] ?? null;
        this.filter.name = s["name"] ?? null;
        this.filter.province = s["province"] ?? null;
        this.filter.age = s["age"] ?? null;
        this.filter.isSelected = s["isSelected"] !== null ? (s["isSelected"] == 'true') : null;
        if (page !== undefined) {
          this.pageIndex = Number(page);
          //this.skip = this.pageIndex * this.take;
        }
        if (pageSize !== undefined) {
          this.take = Math.max(1, Number(pageSize));
        }
        this.skip = this.pageIndex * this.take;
        this.loadUsers();
      });
      this.provinces = [{'name': 'انتخاب استان', code: null}, ...IranProvinces];
    }


  ngOnInit(): void {
  }

  addQueryFilters(q: string) {
    if (this.filter.mobileNumber) {
      q += '&mobileNumber=' + this.filter.mobileNumber;
    }
    if (this.filter.nationalCode) {
      q += '&nationalCode=' + this.filter.nationalCode;
    }
    if (this.filter.name) {
      q += '&name=' + this.filter.name;
    }
    if (this.filter.ticket) {
      q += '&ticket=' + this.filter.ticket;
    }
    if (this.filter.province) {
      q += '&province=' + this.filter.province;
    }
    if (this.filter.age) {
      q += '&age=' + this.filter.age;
    }
    if (this.filter.isSelected !== null) {
      q += '&isSelected=' + this.filter.isSelected;
    }
    q += '&sort=' + this.sort.active + '&sortDir=' + this.sort.direction;
    return q;
  }
  loadUsers() {
    let q = environment.apiUrl + '/api/admin/karmoon/users?skip=' + this.skip + '&take=' + this.take;
    q = this.addQueryFilters(q);
    this.spinner.show();
    this.http.get(q).subscribe({
      next: (s: any) => {
        this.spinner.hide();
        this.totalCount = s.totalCount;
        this.dataSource.connect().next(s.items);
      },
      error: () => {
        this.spinner.hide();
      }
    });
  }

  pageChanged(e: any) {
    this.take = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.navigate();
  }

  formatDate(ts: number) {
    return new Date(ts * 1000).toDateString();
  }
  province(p?: number) {
    if (p === undefined) return '';
    return IranProvinces.find(s => s.code == p)?.name;
  }
  filterClicked() {
    this.pageIndex = 0;
    this.navigate();
  }
  clearFilter() {
    this.filter = {
      mobileNumber: null,
      nationalCode: null,
      ticket: null,
      name: null,
      province: null,
      age: null,
      isSelected: null
    };
    this.pageIndex = 0;
    this.navigate();
  }

  navigate() {
    let res = this.router.navigate(['/admin-area/karmoon-users'], {
      queryParams: {
        'page': this.pageIndex,
        'pageSize': this.take,
        'mobileNumber': this.filter.mobileNumber,
        'nationalCode': this.filter.nationalCode,
        'ticket': this.filter.ticket,
        'name': this.filter.name,
        'province': this.filter.province,
        'age': this.filter.age,
        'isSelected': this.filter.isSelected
      }
    });
    console.log(res);
  }

  sortChange(e: any) {
    console.log(e);
    this.sort = {
      active: e.active,
      direction: e.direction ?? 'asc'
    };
    this.loadUsers();
  }

  provinceChanged(event: any) {
    this.filter.province = event.value;
  }
}
