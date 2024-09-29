import { Component, OnInit } from '@angular/core';
import { KarmoonService } from 'src/app/fardamoon/services/karmoon.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 65, 59, 65], label: 'Series A' },
    { data: [65, 59, 65, 59, 65], label: 'Series B' },
  ];

  constructor(private _karmmonService: KarmoonService) { }

  ngOnInit(): void {
    this._karmmonService.getStudentReport().subscribe((res) => {
      console.log(res)
    })
  }

}
