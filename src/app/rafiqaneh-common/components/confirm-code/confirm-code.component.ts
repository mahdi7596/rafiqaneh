import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthorizationService } from '../../services/authorization.service';
import { NotificationService } from '../../services/notification.service';
import { PersianHelper } from '../../services/PersianHelper';
import { trimByChar } from '../../services/string-helper';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.scss']
})
export class ConfirmCodeComponent implements OnInit {

  mobileNumber: string = '';
  password = '';
  canResend = false;
  waitSeconds = 60;
  timeToResend = this.waitSeconds;

  constructor(private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private router: Router,
    private notification: NotificationService,
    private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.mobileNumber = localStorage.getItem('mobile_number') ?? '';
    let sentAt = +(localStorage.getItem('code_sent_at') ?? 0);
    if (sentAt > 0) {
      let now = new Date();
      let diff = (now.getTime() - sentAt) / 1000;
      if (diff >= this.waitSeconds) {
        this.timeToResend = 0;
        this.canResend = true;
      } else {
        this.timeToResend = Math.ceil(this.waitSeconds-diff);
      }
      console.log(diff);
    }
    if (this.mobileNumber == '') {
      this.router.navigate(['../login']);
    }
    if (!this.canResend) {
       this.startTimer();  
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
    if (!this.password) {
      this.notification.showError('رمز عبور وارد نشده است');
      return;
    }
    this.spinner.show();
    let password = PersianHelper.toEnglishNumbers(this.password);
    this.httpClient.post('/api/loginOtp', {
      mobileNumber: this.mobileNumber,
      password: password
    }).subscribe({
      next:(token: any) => {
        this.spinner.hide();
        this.auth.setToken(token);
        if (this.auth.isProfileSet) {
          let returnUrl = trimByChar(localStorage.getItem('return_url'), '"');
          this.router.navigate([returnUrl ?? '/']);
        } else {
          this.router.navigate(['/register']);
        }
      },
      error: (err) => {
        this.spinner.hide();
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.notification.showError('رمز عبور صحیح نمی باشد');
            return;
          }
        }
        this.notification.showError(err);
      }
    });
  }

  resend() {
    this.spinner.show();
    this.httpClient.post('/api/regenerateOtp', {
      mobileNumber: this.mobileNumber
    }).subscribe({
      next:() => {
        this.spinner.hide();
        this.canResend = false;
        this.timeToResend = this.waitSeconds;
        localStorage.setItem('code_sent_at', new Date().getTime().toString());
        this.startTimer();
      },
      error: (err) => {
        this.spinner.hide();
        this.notification.showError(err);
      }
    });
    
  }
}
