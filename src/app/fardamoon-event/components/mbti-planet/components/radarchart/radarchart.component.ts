import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { mbtiPercentResult } from '../mbti-questions/boroon-daroon-gara/boroon-daroon-gara.component';
import { UserFormsValuesDto } from 'src/app/rafiqaneh-common/models/UserFormsValuesDto';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss']
})
export class RadarchartComponent implements OnInit, OnDestroy {
  @Input() mbtiPercentResult: number[]=[];
  constructor() { }
  ngOnDestroy(): void {
    this.chart?.destroy()  }

  public chart: any;

  ngOnInit(): void {
    this.createChart();
    // console.warn(this.mbtiPercentResult)
   }
 
  createChart() {
    this.chart = new Chart("MyChart2", {
      type: 'radar',
      data: {
        labels: ['برون گرا', 'حسی', 'احساسی', 'ادراکی', 'درون گرا', 'شهودی', 'منطقی','قضاوتی' ],
        datasets: [
          {
            label: "تیپ شخصیتی",
            data: [this.mbtiPercentResult[1],this.mbtiPercentResult[3],this.mbtiPercentResult[5],this.mbtiPercentResult[7],this.mbtiPercentResult[0],this.mbtiPercentResult[2],this.mbtiPercentResult[4],this.mbtiPercentResult[6]],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)'
          }
        ]
      },
      options: {
        aspectRatio: 1,
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 10, 1)',
            },
            grid: {
              color: 'rgba(225, 225, 0, 1)',
            },
            pointLabels: {
              font: {
                size: 14,
                weight: 'bold',
                family: 'sans-serif'
              },
              color: '#fff',
            },

          }

        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16,
                family: 'sans-serif',
                weight: 'bold',
              },
              color: 'rgba(255,255,255,0.85)',
            }
          }
        }
      }
    });
  }
}