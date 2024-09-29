import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FardamoonService } from 'src/app/fardamoon-event/services/fardamoon.service';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from '../../services/authorization.service';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
import { navbarDataItem } from './nav-item-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  firstName = '';
  lastName = '';
  score = 0;
  completedStationsCount = 0;
  avatar = 'assets/images/rafiqaneh.jpg';
  appVersion = environment.appVersion;
  isAdmin = false;
  isProvinceAdmin = false;
  navItems = navbarDataItem;

  constructor(
    private auth: AuthorizationService,
    private userService: UserService,
    private notification: NotificationService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    userService.userInfo$.subscribe((s) => {
      if (!s) return;
      this.firstName = s.firstName;
      this.lastName = s.lastName;
      this.avatar = userService.avatar;
      this.score = s.score ?? 0;
      // this.completedStationsCount = FardamoonService.CalcCompletedStagesCount(
      //   s.completedStations
      // );
    });
    auth.isAuthenticated$.subscribe((s) => {
      if (s) {
        this.isAdmin = auth.isAdmin();
        this.isProvinceAdmin = auth.isProvinceAdmin();
      }
    });
  }

  menuDropdown: boolean = false;

  socialLinks: any[] = [
    // {
    //   image: 'assets/icons/rafiqaneh-eita-id-rafiqaneh_ir.png',
    //   link: 'https://eitaa.com/rafiqaneh',
    // },
    {
      image: 'assets/fardamoon-event/social-icons/social.png',
      link: 'https://www.instagram.com/rafiqaneh/',
    },
    {
      image: 'assets/fardamoon-event/social-icons/rubika-logo.png',
      link: 'https://rubika.ir/Morsali7009',
    },
    {
      image: 'assets/fardamoon-event/social-icons/telegram.png',
      link: 'https://t.me/rafiqaneh',
    },
    {
      image: 'assets/fardamoon-event/social-icons/bale.jpeg',
      link: 'https://web.bale.ai/chat?uid=4636416028',
    },
  ];

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((s) => (this.isAuthenticated = s));
  }

  signOut() {
    this.auth.signOut();
    this.isAuthenticated = this.auth.isAuthenticated();
    this.router.navigate(['/']);
  }

  avatarChanged(ev: any) {
    console.log(ev.target.files);
    if (ev.target.files?.length > 0) {
      this.spinner.show('uploadProfile');
      this.userService.setAvatar(ev.target.files[0]).subscribe({
        next: (r: any) => {
          console.log(r);
          this.spinner.hide('uploadProfile');
          this.avatar = this.userService.avatar;
        },
        error: (e) => {
          this.spinner.hide('uploadProfile');
          this.notification.showError(e);
        },
      });
    }
  }
}
