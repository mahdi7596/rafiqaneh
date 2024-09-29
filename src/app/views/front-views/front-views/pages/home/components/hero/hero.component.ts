import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ICarouselDto } from 'src/app/rafiqaneh-common/components/custom-carousel/ICarouselDto';
import { AuthorizationService } from 'src/app/rafiqaneh-common/services/authorization.service';
import { UserService } from 'src/app/rafiqaneh-common/services/user.service';

export interface IHomeStats {
  users: number;
  fardamoon: number;
  nahalDoosti: number;
}

interface InfoIcon {
  title: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  showAudio: boolean = true;
  isAdmin = false;
  homeStats?: IHomeStats;
  buttonTitle = 'خرید محصول';

  constructor(
    private auth: AuthorizationService,
    private userService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {
    this.loadStats();
    userService.userInfo$.subscribe((s) => {});
    auth.isAuthenticated$.subscribe((s) => {
      if (s) {
        this.isAdmin = auth.isAdmin();
      }
    });
  }

  tabs: string[] = ['سرزمین فردامون', 'سرای سرشت'];
  activatedTabIndex: number = 0;
  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  ngOnInit(): void {}

  onShow() {
    this.showAudio = !this.showAudio;
  }

  loadStats() {
    this.http.get('/api/home/stats').subscribe({
      next: (res: any) => {
        this.homeStats = res;
      },
    });
  }

  extraInfo: InfoIcon[] = [
    {
      title: 'یک عنوان جذاب برای توضیح بیشتر',
    },
    {
      title: 'یک عنوان جذاب برای توضیح بیشتر',
    },
    {
      title: 'یک عنوان جذاب برای توضیح بیشتر ',
    },
  ];

  carouselItems: ICarouselDto[] = [
    {
      src: 'assets/fardamoon-event/banner/1.png',
      alt: 'poster',
    },
    {
      src: 'assets/fardamoon-event/banner/2.png',
      alt: 'poster',
    },
    {
      src: 'assets/fardamoon-event/banner/3.png',
      alt: 'poster',
    },
  ];
}
