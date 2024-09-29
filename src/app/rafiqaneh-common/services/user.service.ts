import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from './authorization.service';
import { NotificationService } from './notification.service';
import { PersianHelper } from './PersianHelper';

export interface UserInfo {
    mobileNumber: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    nationalCode: string;
    province: number;
    city: number;
    introducer: string;
    ticketNumber: string;
    avatar?: string;
    fardamoonAvatar?: string;
    completedStations?: any;
    score?: number;
    issuancePlace?: string;
    fatherName?: string;
    identityNumber?: number;
    gender?: 'male'|'female';
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userInfo?: UserInfo;
    userInfo$ = new BehaviorSubject<UserInfo | undefined>(this.userInfo);

    constructor(private router: Router,
        private spinner: NgxSpinnerService,
        private notification: NotificationService,
        private auth: AuthorizationService,
        private http: HttpClient) {
        this.auth.isAuthenticated$.subscribe(s => {
            if (s) {
                this.getProfile().subscribe();
            } else {
                this.userInfo = undefined;
                this.userInfo$.next(this.userInfo);
            }
        });
    }

    private getProfile() {
        return this.http.get<UserInfo>('/api/user/getProfile').pipe(map((s) => {
            this.userInfo = s;
            localStorage.setItem('user_info', JSON.stringify(s));
            this.userInfo$.next(this.userInfo);
            return s;
        }));
    }

    public setProfile(user: UserInfo) {
        let data = new FormData();
        data.set('firstName', user.firstName ? user.firstName : '');
        data.set('lastName',  user.lastName ? user.lastName : '');
        data.set('birthDate', PersianHelper.toEnglishNumbers(user.birthDate));
        data.set('nationalCode', user.nationalCode);
        data.set('ticketNumber', user.ticketNumber ? user.ticketNumber : '');
        data.set('province', user.province?user.province.toString(): '');
        data.set('city', user.city?user.city.toString(): '');
        data.set('mobileNumber', user.mobileNumber);
        if (user.issuancePlace) data.set('issuancePlace', user.issuancePlace);
        if (user.fatherName) data.set('fatherName', user.fatherName);
        if (user.identityNumber) data.set('identityNumber', user.identityNumber.toString());
        if (user.gender) data.set('gender', user.gender);
       

        return this.http.post('/api/user/setProfile', data).pipe(map((s: any) => {
            this.auth.setToken(s.token);
            this.userInfo = s.user;
            this.userInfo$.next(this.userInfo);
        }));
    }

    // getUserInfo$() {
    //     if (this.userInfo) {
    //         return of(this.userInfo!);
    //     }
    //     // let u = localStorage.getItem('user_info');
    //     // if (u) {
    //     //     this.userInfo = JSON.parse(u);
    //     //     return of(this.userInfo!);
    //     // }
    //     return this.getProfile();
    // }

    setAvatar(file: File) {
        let form = new FormData();
        form.set('avatar', file);
        return this.http.post('/api/user/setAvatar', form).pipe(map((r: any) => {
            if (this.userInfo) {
                this.userInfo.avatar = r.url;
                this.userInfo$.next(this.userInfo);
            }

        }));
    }

    get avatar() {
        if (!this.userInfo) return 'assets/images/rafiqaneh.jpg';
        if (this.userInfo.avatar ?? this.userInfo.fardamoonAvatar) {
            return environment.apiUrl + '/' + (this.userInfo.avatar ?? this.userInfo.fardamoonAvatar);
        }
        else {
            return 'assets/images/rafiqaneh.jpg';
        }
    }

    // get avatar() {
    //     if (!this.ticketDto.avatar || this.ticketDto.avatar == '')
    //         return 'assets/images/rafiqaneh.jpg';
    //     return environment.apiUrl + '/' + this.ticketDto.avatar;
    // }

    getSynData(key: string) {
        return this.http.get('/api/user/getSyncData/' + key).pipe(
            map((s:any) => {
                return s?.value ?? null; }
                ));
    }

    setSynData(key: string, value: any) {
        return this.http.post('/api/user/setSyncData', {
            key: key,
            value: value
        });
    }
    deleteSynData(key: string, value: any) {
        return this.http.post('/api/user/deleteSynData', {
            key: key
        });
    }
}