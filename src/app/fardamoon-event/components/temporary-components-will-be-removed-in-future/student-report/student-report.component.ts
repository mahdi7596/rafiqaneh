import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  GARDNER_TITLES,
  HOLLAND_TITLES,
  KarmoonReportDto,
  MBTI_TITLES,
  MBTI_TYPE_TITLES,
} from 'src/app/fardamoon-event/models/KarmoonReportDto';
import { TicketDto } from 'src/app/fardamoon-event/models/TicketDto';
import { FardamoonService } from 'src/app/fardamoon-event/services/fardamoon.service';
import { KarmoonService } from 'src/app/fardamoon/services/karmoon.service';
import { UserService } from 'src/app/rafiqaneh-common/services/user.service';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.scss'],
})
export class StudentReportComponent implements OnInit {
  firstName = 'نام کاربر';
  lastName = 'نام خانوادگی کاربر';
  birthDate = 'تاریخ تولد کاربر';

  ticketDto!: TicketDto;
  @ViewChild('ticket')
  ticket!: ElementRef;

  karmoonReport?: KarmoonReportDto;
  hollandResult = '-';
  hollandTestDescription = '';

  mbtiResult = '-';
  mbtiDescription = '';
  mbtiRadarData: {
    data?: ChartData<'radar'>;
    options: ChartConfiguration['options'];
  } = {
    data: undefined,
    options: {
      responsive: true,
      color: '#8946a687',
      plugins: {
        tooltip: {
          titleColor: '#8946a687',
        },
        title: {
          color: '#8946a687',
        },
        subtitle: {
          color: '#8946a687',
        },
        legend: {
          labels: {
            color: '#8946a687',
            font: {
              size: 18,
            },
          },
        },
      },
      datasets: {
        radar: {
          label: '',
          fill: true,
          backgroundColor: '#8946a687',
          borderColor: '#8946a687',
          pointBackgroundColor: '#8946a687',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#8946a687',
        },
      },
    },
  };

  gardnerResult = '-';
  gardnerDescription = '';
  gardnerChartData: {
    data?: ChartData<'bar'>;
    options: ChartConfiguration['options'];
  } = {
    data: undefined,
    options: {
      responsive: true,
      color: '#8946a687',
      plugins: {
        tooltip: {
          titleColor: '#8946a687',
        },
        title: {
          color: '#8946a687',
        },
        subtitle: {
          color: '#8946a687',
        },
        legend: {
          labels: {
            color: '#FE829C',
            font: {
              size: 18,
            },
          },
        },
      },
      datasets: {
        radar: {
          label: '',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      },
    },
  };

  constructor(
    private fardamoon: FardamoonService,
    private karmoon: KarmoonService,
    private user: UserService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.spinner.show();
    this.karmoon.getKarmoonProgress().subscribe({
      next: (s) => {
        this.spinner.hide();
        console.log(s);
        if (!s.karmoon7?.completedAt) {
          this.router.navigateByUrl('/fardamoon/job-station');
        }
        this.loadStudentReport();
      },
      error: () => {
        this.spinner.hide();
      },
    });

    user.userInfo$.subscribe(
      (s) => (this.firstName = s?.firstName ?? 'نام کاربر')
    );
    user.userInfo$.subscribe(
      (s) => (this.lastName = s?.lastName ?? 'نام خانوادگی کاربر')
    );
    user.userInfo$.subscribe(
      (s) => (this.birthDate = s?.birthDate ?? 'نام خانوادگی کاربر')
    );
    this.fardamoon.ticketLoaded$.subscribe((s) => {
      this.ticketDto = s;
    });
  }
  ngOnInit(): void {}

  loadStudentReport() {
    this.spinner.show();
    this.karmoon.getStudentReport().subscribe({
      next: (res) => {
        console.log(res);
        this.spinner.hide();
        this.karmoonReport = res;
        if (res.k2.testResult && res.k2.testResult in HOLLAND_TITLES) {
          this.hollandResult = (<any>HOLLAND_TITLES)[res.k2.testResult].title;
          this.hollandTestDescription =
            (<any>HOLLAND_TITLES)[res.k2.testResult].description ?? '';
        }

        if (res.k3.testResult && res.k3.testResult in MBTI_TYPE_TITLES) {
          let typeTitles = [];
          for (let char of res.k3.testResult) {
            typeTitles.push((<any>MBTI_TITLES)[char].title);
          }
          this.mbtiResult =
            res.k3.testResult +
            ' (' +
            (<any>MBTI_TYPE_TITLES)[res.k3.testResult] +
            ')';
          this.mbtiDescription = typeTitles.join('-');
          this.mbtiRadarData.data = {
            labels: [
              MBTI_TITLES.E.title,
              MBTI_TITLES.N.title,
              MBTI_TITLES.F.title,
              MBTI_TITLES.P.title,
              MBTI_TITLES.I.title,
              MBTI_TITLES.S.title,
              MBTI_TITLES.T.title,
              MBTI_TITLES.J.title,
            ],
            datasets: [
              {
                data: [
                  res.k3.scores.E ?? 0,
                  res.k3.scores.N ?? 0,
                  res.k3.scores.F ?? 0,
                  res.k3.scores.P ?? 0,
                  res.k3.scores.I ?? 0,
                  res.k3.scores.S ?? 0,
                  res.k3.scores.T ?? 0,
                  res.k3.scores.J ?? 0,
                ],
                label: 'نتیجه آزمون MBTI',
              },
            ],
          };
        }

        if (res.k4.testResult && res.k4.testResult in GARDNER_TITLES) {
          this.gardnerResult = (<any>GARDNER_TITLES)[res.k4.testResult].title;
          this.gardnerDescription = '';
          this.gardnerChartData.data = {
            labels: [
              GARDNER_TITLES.L.title,
              GARDNER_TITLES.S.title,
              GARDNER_TITLES.V.title,
              GARDNER_TITLES.B.title,
              GARDNER_TITLES.I.title,
              GARDNER_TITLES.J.title,
              GARDNER_TITLES.M.title,
              GARDNER_TITLES.N.title,
            ],
            datasets: [
              {
                data: [
                  res.k4.scores.L ?? 0,
                  res.k4.scores.S ?? 0,
                  res.k4.scores.V ?? 0,
                  res.k4.scores.B ?? 0,
                  res.k4.scores.I ?? 0,
                  res.k4.scores.J ?? 0,
                  res.k4.scores.M ?? 0,
                  res.k4.scores.N ?? 0,
                ],
                label: 'آزمون هوش چندگانه',
              },
            ],
          };
        }
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }

  goBack() {
    this.router.navigate(['/fardamoon']);
  }
}
