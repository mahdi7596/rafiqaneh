import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { IranProvinces } from 'src/app/rafiqaneh-common/models/provinces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-province-users',
  templateUrl: './province-users.component.html',
  styleUrls: ['./province-users.component.scss']
})
export class ProvinceUsersComponent implements OnInit, AfterViewInit {

  skip = 0;
  take = 50;
  page = 1;
  totalCount = 0;
  //filter?: {q: 'mobileNumber'|'nationalCode', value: string};
  filter = {
    mobileNumber: null,
    nationalCode: null,
    name: null
  };

  sort = {
    active: 'id',
    direction: 'asc'
  };

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobileNumber', 'nationalCode',
    'birthDate', 'createdAt', 'mobileConfirmed'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    this.loadUsers();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  loadUsers() {
    let q = environment.apiUrl + '/api/province/users?skip=' + this.skip + '&take=' + this.take;
    if (this.filter.mobileNumber) {
      q += '&mobileNumber=' + this.filter.mobileNumber;
    }
    if (this.filter.nationalCode) {
      q += '&nationalCode=' + this.filter.nationalCode;
    }
    if (this.filter.name) {
      q += '&name=' + this.filter.name;
    }
    q += '&sort=' + this.sort.active + '&sortDir=' + this.sort.direction;
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
    this.skip = e.pageIndex * this.take;
    this.loadUsers();
    console.log(e);
  }

  formatDate(ts: number) {
    return new Date(ts * 1000).toDateString();
  }
  province(p?: number) {
    if (p === undefined) return '';
    return IranProvinces.find(s => s.code == p)?.name;
  }
  filterClicked() {
    this.loadUsers();
  }
  clearFilter() {
    this.filter = {
      mobileNumber: null,
      nationalCode: null,
      name: null
    };
    this.loadUsers();
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
    this.http.get('/api/province/users/export-csv',
      {
        responseType: 'blob' as 'json'
      }
    ).subscribe({
      next: (response) => {
        this.spinner.hide();
         this.downLoadFile(response, "users.csv")
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


}
