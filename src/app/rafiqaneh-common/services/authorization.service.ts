import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { IranProvinces } from '../models/provinces';
//import randomBytes from 'randombytes'

export interface TokenDto {
  iss: string,
  ia: number,
  exp: number,
  nbf: number,
  jti: string,
  sub: number,
  prv: string,
  profileSet: boolean,
  roles: null | string[],
  given_name: string,
  family_name: string,
  gender: null | string,
  username: null | string,
  email: null | string,
  phone_number: string,
  phone_number_verified: boolean,
  province_admin?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  parsedToken?: TokenDto = undefined;

  isAuthenticated$ = new BehaviorSubject<boolean>(this.isAuthenticated());
  //private deviceId: string = null;

  constructor(private router: Router,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar) {
  }

  public getToken(): string | null {
    try {
      let token_str = localStorage.getItem('user_token');
      if (token_str) {
        let token = JSON.parse(token_str);
        return token?.token;
      }
    } catch {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('user_token');
      }
      return null;
    }
    return null;
  }
  isAuthenticated(): boolean {
    if (this.parsedToken && this.parsedToken.exp > (Date.now() / 1000 | 0)) {
      return true;
    }
    let token = this.getToken();
    if (token) {
      this.parsedToken = this.parseJwt(token);
      if (this.parsedToken)
        return this.parsedToken.exp > (Date.now() / 1000 | 0);
    }
    return false;
  }

  get isProfileSet(): boolean {
    return this.parsedToken?.profileSet ?? false;
  }

  isAdmin(): boolean {
    if (!this.parsedToken) {
      return false;
    }
    if (this.parsedToken.roles) {
      return this.parsedToken.roles.indexOf('administrator') !== -1;
    }
    return false;
  }

  isProvinceAdmin(): boolean {
    if (!this.parsedToken) {
      return false;
    }
    if (this.isAdmin()) {
      return true;
    }
    if (this.parsedToken.roles) {
      return this.parsedToken.roles.indexOf('province_admin') !== -1;
    }
    return false;
  }

  getProvinceAdmin() {
    if (!this.parsedToken?.province_admin) {
      return null;
    }
    let province = +this.parsedToken.province_admin;
    return IranProvinces.find(s => s.code == province);
  }

  public signOut() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('mobile_number');
    localStorage.removeItem('roles');
    localStorage.removeItem('user_info');
    localStorage.removeItem('answers');
    this.parsedToken = undefined;
    this.isAuthenticated$.next(false);
  }

  setToken(token: any) {
    localStorage.setItem('user_token', JSON.stringify(token));
    this.parsedToken = this.parseJwt(token.token);
    // console.log(token, this.parsedToken);
    this.isAuthenticated$.next(this.parsedToken ? true : false);
  }

  private parseJwt(token: string) {
    try {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch {
      return null;
    }
  };
  // public getDeviceId() {
  //   return this.deviceId;
  // }

  // initDeviceId() {
  //   const deviceId = localStorage.getItem('device_id');
  //   if (deviceId) {
  //     this.deviceId = deviceId;
  //   } else {
  //     this.deviceId = randomBytes(64).toString('hex');
  //     localStorage.setItem('device_id', this.deviceId);
  //   }
  // }

}