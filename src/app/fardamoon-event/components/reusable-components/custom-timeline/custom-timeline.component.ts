import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormProgressDto } from 'src/app/fardamoon-event/models/FormProgressDto';
import { KarmoonProgressDto } from 'src/app/fardamoon-event/models/KarmoonProgressDto';
import { MissionDto } from 'src/app/fardamoon-event/models/Mission';

@Component({
  selector: 'app-custom-timeline',
  templateUrl: './custom-timeline.component.html',
  styleUrls: ['./custom-timeline.component.scss'],
})
export class CustomTimelineComponent implements OnInit {
  @Input() missions: MissionDto[] = [
    {
      title: 'آزمون رغبت سنجی شغلی هالند',
      content:
        'تست رغبت سنجی شغلی هالند، یکی از معتبرترین آزمون‌ها برای کشف علایق و تمایلات شغلی هر فرد است. نام این آزمون از نام نظریه‌پرداز آن جان هالند برگرفته شده است که معتقد بود همخوانی بین شغل و تمایلات و علایق فرد، بازدهی فرد در آن شغل را به‌شدت افزایش می‌دهد. در مدل نظری جان هالند، ۶ تیپ اصلی شغلی وجود دارد که با پاسخ دادن به سؤالات این تست، میزان علاقه و تمایل افراد به هریک از این تیپ‌های شغلی مورد سنجش قرار می‌گیرد.',
      status: 'unlocked',
      timer: false,
      link: '/fardamoon/job-station/intro',
      formName: 'karmoon2-planet',
    },
    {
      title: 'آزمون MBTI (مایرز بریگز)',
      content:
        'پرسش‌نامه روان‌سنجی فردی است که برای شناسایی نوع شخصیت، نقاط قوت و اولویت‌های افراد طراحی شده است. این تست توسط ایزابل مایرز (Isabel Myers) و مادرش کاترین بریگز (Katherine Briggs) و بر اساس کارشان بر روی تئوری کارل یونگ (Carl Jung) درمورد انواع شخصیت تهیه شده است. به‌طور مشخص، تست شخصیت شناسی به افراد کمک می‌کند تا شناخت بهتری از خود و دیگران پیدا کند. این شناخت یکی از باارزش‌ترین خصیصه‌هایی است که افراد در هر سازمان یا مجموعه‌ای می‌توانند در اختیار داشته باشند.',
      status: 'locked',
      timer: false,
      link: '/fardamoon/job-station/karmoon3',
      formName: 'karmoon3-planet',
    },
    {
      title: 'آزمون هوش چندگانه گاردنر',
      content:
        'آزمون هوش گاردنر یکی از آزمون هایی است که  کاربردهای زیادی، به‌ویژه در محیط‌های آموزشی دارد. بسیاری از افراد وقتی صحبت از هوش می‌شود، تصور می‌کنند هوش بالا تنها به معنی محاسبات سریع ذهنی است؛ اما «هوارد گاردنر» این تصور اشتباه را کنار زد و با ارائهٔ نظریه هوش ‌های چندگانه خود باعث شد توجه‌ها به سمت سایر هوش‌ها هم جلب شود.',
      status: 'locked',
      timer: false,
      link: '/fardamoon/job-station/karmoon4',
      formName: 'karmoon4-planet',
    },
    {
      title: 'چالش شغلی یک',
      content:
        'ما توی این چالش به شما یه وظیفه می دیم تا بتونیم با کمک شما مشاغل محیط زندگی شما رو به بقیه دوستان رفیقانه معرفی کنیم. ماموریت شما اینه که به کمک تلفن همراهتون یه ویدئو از پدر یا مادر یا یکی دیگه از اعضای خانواده تون بگیرید ...',
      status: 'locked',
      timer: false,
      link: '/fardamoon/job-station/karmoon5',
      formName: 'karmoon5-planet',
    },
    {
      title: 'چالش شغلی دو',
      content: 'بعد از انجام چالش اول مشخص میشه ...',
      status: 'locked',
      timer: false,
      link: '/fardamoon/job-station/karmoon6',
      formName: 'karmoon6-planet',
    },
    {
      title: 'چالش آخر',
      content:
        'بر اساس نتایج آزمون هاتون ما چند تا شغل بهتون پیشنهاد بدیم و شما مثل وظیفه دو از اون کار رو ویدئو یا صوت یا گزارش تهیه کنید  ...',
      status: 'locked',
      timer: false,
      link: '/fardamoon/job-station/karmoon7',
      formName: 'karmoon7-planet',
    },
    {
      title: 'کارنامه کارمون',
      content:
        'بالاخره این سیاره هم تموم شد و باتوجه به کارنامه‌ای که برات صادر میشه متوجه میشی که تو چه حوزه‌هایی میتونی موفق باشی! پیشنهاد ما اینه که اگر وقت اضافه‌ای در طول روز داری به استعدادهایی که داری توجه کنی و پرورششون بدی',
      status: 'locked',
      formName: 'certificate',
      buttonTitle: 'مشاهده کارنامه',
      timer: false,
      link: '/fardamoon/job-station/student-report',
    },
  ];

  @Input() planetImage: string = 'assets/fardamoon/images/half-job-planet.png';
  @Input() planetClass: string = 'absolute bottom-0 transform translate-y-14';
  @Input() shazdeClass: string = 'absolute ';
  @Input() shazdeImage: string = 'assets/fardamoon-event/shazde-kochlo.png';
  @Input() explanation: string = '';

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    // this.spinner.show();
  }

  goBack() {
    this.router.navigate(['/fardamoon']);
  }

  updateMissionStatus(progress: KarmoonProgressDto) {}

  calcRemainedTime(mission: any, formProgress?: FormProgressDto) {
    if (!formProgress) {
      return;
    }
    if (!formProgress.completedAt) {
      mission.remainedTime = 0;
      return;
    }
    let elsapsed = Math.round(Date.now() / 1000 - formProgress.completedAt);
    mission.remainedTime = 24 * 60 * 60 - elsapsed;
    if (mission.remainedTime < 0) {
      window.location.reload();
      mission.remainedTime = 0;
    }
  }
}
