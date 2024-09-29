import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() PercentResult: number[] = [];
  @Input() NameResult: string[] = [];
  @Input() chartName: string = 'رغبت';
  

  constructor() { }

  ngOnInit(): void {
    this.createChart();

    console.log(this.PercentResult);
    console.log(this.NameResult)
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: this.NameResult,
        datasets: [
          {
            label: " درصد",
            data: this.PercentResult,
            backgroundColor: [
              'rgba(255, 99, 132,0.2)',
              'rgba(255, 159, 64,0.2)',
              'rgba(255, 205, 86,0.2)',
              'rgba(75, 192, 192,0.2)',
              'rgba(54, 162, 235,0.2)',
              'rgba(153, 102, 255,0.2)',
              'rgba(255, 99, 132,0.2)',
              'rgba(255, 159, 64,0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        aspectRatio: 1,
        plugins: {
          title: {
            display: true,
            text:"نمودار"+" "+this.chartName,
            font: {
              size: 16,
              weight: 'bold',
              family: 'sans-serif'
            },
            color: '#fff'
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
                family: 'sans-serif'

              }
            }
          },
        },
        scales: {
          x: {
            grid: {
              display: false // Hide X-axis grid lines for cleaner look
            },
            ticks: {
              font: {
                size: 10,
                family: 'sans-serif'

              },
              color: "rgba(255, 255, 255, 0.9)"
            }
          },
          y: {
            grid: {
              color: 'rgba(200, 0, 270, 0.3)', // Add a light grey color to Y-axis grid lines
            },
            ticks: {
              font: {
                size: 10,
                family: 'sans-serif'

              },
              color: "rgba(255, 255, 255, 0.8)"

            }
          }
        }
      }
    });
  }

}


