import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { NotificationService } from '../../services/notification.service';
import { PersianHelper } from '../../services/PersianHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mobileNumber: string = '';
  canResend = true;
  waitSeconds = 60;
  timeToResend = 0;
  appVersion = environment.appVersion;

  constructor(private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private notification: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
    let sentAt = +(localStorage.getItem('code_sent_at') ?? 0);
    if (sentAt > 0) {
      let now = new Date();
      let diff = (now.getTime() - sentAt) / 1000;
      if (diff >= this.waitSeconds) {
        this.timeToResend = 0;
        this.canResend = true;
      } else {
        this.canResend = false;
        this.timeToResend = Math.ceil(this.waitSeconds-diff);
      }
      if (!this.canResend) {
        this.startTimer();  
     } 
      console.log(diff);
    }
  }

  startTimer() {
    let t = setInterval(() => {
      if (this.timeToResend <= 0) {
        clearInterval(t);
        this.canResend = true;
        return;
      }
      this.timeToResend--;
    }, 1000)
  }


  submit() {
    this.spinner.show();
    let mobile = PersianHelper.toEnglishNumbers(this.mobileNumber);
    this.httpClient.post('/api/registerOtp', {
      mobileNumber: mobile
    }).subscribe({
      next:() => {
        this.spinner.hide();
        localStorage.setItem('mobile_number', mobile);
        localStorage.setItem('code_sent_at', new Date().getTime().toString());
        this.router.navigate(['../confirm']);
      },
      error: (err: any) => {
        this.spinner.hide();        
        this.notification.showError(err);
      }
    });
  }

}
