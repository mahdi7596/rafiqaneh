import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

interface IFardamoonAnswer {
  station: 'job'|'family'|'poletical'|'adrenaline';
  question: number;
  answer: string;
  answerOptions: any;
}
@Component({
  selector: 'app-fardamoon-answers',
  templateUrl: './fardamoon-answers.component.html',
  styleUrls: ['./fardamoon-answers.component.scss']
})
export class FardamoonAnswersComponent implements OnInit {

  answers: any = null;
  user: any;

  poleticalOptions = [
    {
      image: 'assets/images/poletical-station-1.jpg',
      name: 'st1'
    },
    {
      image: 'assets/images/poletical-station-2.jpg',
      name: 'st2'
    },
    {
      image: 'assets/images/poletical-station-3.jpg',
      name: 'st3'
    },
    {
      image: 'assets/images/poletical-station-4.jpg',
      name: 'st4'
    },
    {
      image: 'assets/images/poletical-station-5.jpg',
      name: 'st5'
    },
    {
      image: 'assets/images/poletical-station-6.jpg',
      name: 'st6'
    }
    
  ];

  adrenalineQ2Options = [
    {
      name: 'tourism',
      image: "assets/images/choose-adernaline-image.jpeg"
    },
    {
      name: 'cinema',
      image: "assets/images/choose-adernaline-image2.jpg"
    },
    {
      name: 'digigame',
      image: "assets/images/ar-poster.jpg"
    }
  ];

  constructor(private http: HttpClient, private spinner: NgxSpinnerService,
    private activeRoute: ActivatedRoute) { 
      this.activeRoute.params.subscribe(p => {
        let userId = p["userId"];
        this.getAnswers(userId);
      });
    }

  ngOnInit(): void {
  }

  getAnswers(userId: number) {
    this.spinner.show();
    this.http.get('/api/admin/fardamoon/answers?userId=' + userId).subscribe(
      {
        next: (data: any) => {
          this.spinner.hide();
          let answers: any = [];
          let a = data.answers;
          for(let i in a)
          {
            let station = a[i].station;
            let st = answers.find((s:any) => s.station === station);
            if (!st) {
              st = {
                station: station,
                answers: []
              };
              answers.push(st);
            }
            st.answers.push(a[i]);
          }
          this.answers = answers;
          this.user = data.user;
          console.log(this.answers);
        },
        error: () => {
          this.spinner.hide();
        }
      }
    )
  }

  station(s: string) {
    switch (s) {
      case 'job': return 'کارمون';
      case 'family': return 'زیمون';
      case 'poletical': return 'همساز';
      case 'adrenaline': return 'آدرنالین';
      default: return '';
    }
  }

  getOptions(q: any) {
    if (!q.answerOptions) return null;
    if (q.question === 1 && q.station === 'adrenaline') {
      return [this.adrenalineQ2Options.find(s => s.name == q.answerOptions)?.image];
    }
    else if (q.station == 'poletical' && q.question === 0) {
      return q.answerOptions.map((x: string) => this.poleticalOptions.find(s => s.name == x)?.image);      
    }
  }

}
