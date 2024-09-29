import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IranProvinces } from 'src/app/rafiqaneh-common/models/provinces';
import { environment } from 'src/environments/environment';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-fardamoon-users',
  templateUrl: './fardamoon-users.component.html',
  styleUrls: ['./fardamoon-users.component.scss']
})
export class FardamoonUsersComponent implements OnInit, AfterViewInit {
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
    active: 'userId',
    direction: 'asc'
  };

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobileNumber', 'ticket',
    'score', 'createdAt', 'province', 'age', 'isSelected', 'operations'];
  dataSource = new MatTableDataSource<any>([]);

  provinces: {name: string, code: number|null}[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
    //this.loadUsers();

    this.provinces = [{'name': 'انتخاب استان', code: null}, ...IranProvinces];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
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
    let q = environment.apiUrl + '/api/admin/fardamoon-users?skip=' + this.skip + '&take=' + this.take;
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
    let res = this.router.navigate(['/admin-area/fardamoon-users'], {
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

  downloadCsv(e: Event) {
    e.stopPropagation();
    this.spinner.show();
    let q = '/api/admin/fardamoon-users/export-csv?';
    q = this.addQueryFilters(q);
    this.http.get(q,
      {
        responseType: 'blob' as 'json'
      }
    ).subscribe({
      next: (response) => {
        this.spinner.hide();
        this.downLoadFile(response, "fardamoon-users.csv")
      }, error: () => {
        this.spinner.hide();
      }
    });
  }

  downLoadFile(response: any, filename?: string) {
    let dataType = response.type;
    let binaryData = [];
    binaryData.push(response);
    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
    if (filename)
      downloadLink.setAttribute('download', filename);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  viewUserDetails(user: any) {
    console.log(user)
    let d = this.dialog.open(UserDetailsComponent);
    d.componentInstance.user = user.user;
  }

  viewTicketDetails(user: any) {
    console.log(user)
    let d = this.dialog.open(TicketDetailsComponent);
    d.componentInstance.ticket = user.fardamoon;
  }

  viewAnswers(user: any) {

  }

  provinceChanged(event: any) {
    this.filter.province = event.value;
  }

  toggleUserSelected(user: any) {
    this.spinner.show();
    this.http.post('/api/admin/fardamoon-users/setUserSelected',
    {
      userId: user.userId,
      selected: !user.isSelected
    }).subscribe({
      next: () => {
      this.spinner.hide();
      user.isSelected = !user.isSelected;
      if (this.filter.isSelected !== null) {
        this.loadUsers();
      }
      },
      error: () => {
      this.spinner.hide();

      }
    })
  }
}
