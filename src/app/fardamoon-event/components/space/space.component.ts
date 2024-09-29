import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/rafiqaneh-common/services/authorization.service';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';
import { FardamoonService } from '../../services/fardamoon.service';
import { UserService } from 'src/app/rafiqaneh-common/services/user.service';
import { NeonButtonComponent } from 'src/app/rafiqaneh-common/components/neon-button/neon-button.component';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
})
export class SpaceComponent implements OnInit, AfterViewInit {
  spaceCraftPos = [0, 0];
  spaceCraftRotation: number = 0;
  spaceCraftRotationOffset = 90;
  spaceCraftDir = 1;
  spaceCraftMoveComplete = false;
  @ViewChild('startBtn')
  startBtn!: NeonButtonComponent;
  @ViewChild('startGuide')
  journeyStarting = false;
  @ViewChild('canvas') canvas!: ElementRef;
  isAuthenticated = false;
  isRegistered = false;
  isProfileSet = false;
  profileQuestionSubmitted = false;
  customizedPlanetSubmitted: string | boolean = false;
  hasAnyAnswer = false;
  allCompleted = false;
  spaceMoveIntervalHandle: any;
  firstName = '';

  hintCardContent = `سلام`;
  hintCardActiveContent = '';
  hintCardRestOfContent = `
  عزیزم! 
من راهنمای تو در این سفر شگفت انگیز و اکتشافی ام خوشحالم که در این سفر همراهیت میکنم و قراره باهم کارهای هیجان انگیزی انجام بدیم برای اینکه بهتر باهم اشنا بشیم با من همراه شو.....
  `;

  tooltipContent = 'حواست باشه صدای دستگاهت کم نباشه...';

  titleContent = `تو این مسیر قراره همراه شازده کوچولو باشی که هم اون رو به سیاره خودش برسونی و هم استعدادهات رو بشناسی.
راستی یادت باشه که  هرچی پاسخ هات به سوالات صادقانه تر باشه شناختن هوش و استعداد و شخصیتت هم دقیق تر میشه
اگر دوست داری با فردامون فردای متفاوت تری داشته باشی
 با ما همراه شو .`;

   sloganContent = `دوست عزیزم، `

  paragraphContent = `
    برای رسیدن به سیاره ی فردامون باید از 4 سیاره دیگه به نام‌های کارمون،
    زیمون، آدرنالین و همساز عبور کنی و با توقف کوچیکی توی هر کدوم از این
    سیاره‌ها به چند سوال پاسخ بدی. نگران نباش! در هر مرحله فمتو کمکت می‌کنه
    به سوالات پاسخ دقیق بدی. فقط یادت باشه باید به همه سوالات پاسخ بدی تا
    بتونی به مسیرت ادامه بدی... به ازای هر پاسخ ۱ امتیاز میگیری که بعدا
    می‌تونی از خدمات باشگاه مخاطبین ما استفاده کنی...
  `;
  showAudio: boolean = true;

  
  goBack() {
    this.router.navigate(['/']);
  }
  onShow(){
    this.showAudio = !this.showAudio
  }
  
  constructor(
    private notification: NotificationService,
    private router: Router,
    private auth: AuthorizationService,
    private fardamoon: FardamoonService,
    private userService: UserService
  ) {
    userService.userInfo$.subscribe(
      (s) => (this.firstName = s?.firstName ?? 'فردامونی')
    );
    this.auth.isAuthenticated$.subscribe((s) => {
      // console.log('isAuth space', s);
      this.isAuthenticated = s;
      this.isProfileSet = this.auth.isProfileSet;
    });
  }
  
  ngOnInit() {}
  
  ngAfterViewInit(): void {
    this.moveSpacecraft();
  }

  // ! @zatkhahi  اقای ذات خواهی لطفا مشکل این رو حل کنید من نتونستم / قبلا به این شکل بود که در زمان لود این کامپوننت اون راکت شروع به حرکت میکرد و بعد یک جا می ایستاد
  moveSpacecraft() {
    let t = 0;
    this.spaceMoveIntervalHandle = setInterval(() => {
      let x = t / 100;
      if (x > 1) {
        this.spaceCraftRotation =
          (Math.floor(this.spaceCraftRotation) + 2) % 360;
        if (this.spaceCraftRotation <= 2) {
          this.spaceCraftMoveComplete = true;
          clearInterval(this.spaceMoveIntervalHandle);
        }
        return;
      }
      // let grect = {x: 100, bottom:0, height: 50};
        // this.startBtn.nativeElement.getBoundingClientRect();
      // console.log(grect);
      // let finalPoint = [grect.x - 80, grect.bottom + grect.height];
      let cp = [];
      let breakDirT = 50;
      if (window.innerWidth > 880) {
        cp = [
          [36, 735],
          [1234, 920],
          [675, -94],
          [100, 350],
        ];
        breakDirT = 43;
      } else {
        let w = window.innerWidth;
        let h = window.innerHeight;
        let fp = window.innerWidth > 572 ? [0, 300] : [0, 300];
        cp = [[0, h], [w, h], [w, h / 3], fp];
      }
      let p = this.getCubicBezierCurve(x, cp);
      let rot = this.getRotationChange(this.spaceCraftPos, p);
      let pd = this.getCubicBezierCurveDerivative(x, cp);
      let newRotation = (-Math.atan(pd[1] / pd[0]) * 180) / Math.PI;
      if (t > breakDirT) {
        this.spaceCraftDir = -1;
      } else {
        this.spaceCraftDir = 1;
      }
      this.spaceCraftRotation =
        (this.spaceCraftDir == 1 ? 0 : 180) +
        newRotation +
        this.spaceCraftRotationOffset;
      let scale = 1;
      this.spaceCraftPos = [scale * p[0], scale * (window.innerHeight - p[1])];
      t += 1;
    }, 25);
  }

  startJourney() {
    if (!this.spaceCraftMoveComplete) {
      clearInterval(this.spaceMoveIntervalHandle);
      this.spaceCraftRotation = 0;
    }
    if (this.journeyStarting) {
      return;
    }

    let t = 0;
    let ci = setInterval(() => {
      this.journeyStarting = true;
      this.spaceCraftPos[1] -= 2;
      if (this.spaceCraftPos[1] < -250) {
        clearInterval(ci);
        this.journeyStarting = false;
        this.router.navigate(['/fardamoon/solar-system']);
      }
    }, 10);
  }

  getSpaceCraftPos(elapsed: number) {
    //elapsed += delta;
    const T = 300;
    let p0 = [100, 300];
    let cp = [100, 10];
    let p2 = [250, 5];
    if (elapsed > T) return [0, 0];
    let t = elapsed / T;
    let pos = [];
    //let p0 = [sprite.x, sprite.y];
    for (let i = 0; i < 2; i++) {
      pos[i] =
        (1 - t) * (1 - t) * p0[i] + 2 * (1 - t) * t * cp[i] + t * t * p2[i];
    }
    return pos;
    //   return [ pos[0] - sprite.width / 2,
    //   pos[1] - sprite.height / 2
    // ];
  }

  getCubicBezierCurve(t: number, cp: number[][]) {
    let p = [0, 0];
    for (let i = 0; i < 2; i++) {
      p[i] =
        (1 - t) * (1 - t) * (1 - t) * cp[0][i] +
        3 * (1 - t) * (1 - t) * t * cp[1][i] +
        3 * (1 - t) * t * t * cp[2][i] +
        t * t * t * cp[3][i];
    }
    return p;
  }

  getCubicBezierCurveDerivative(t: number, cp: number[][]) {
    let p = [0, 0];
    for (let i = 0; i < 2; i++) {
      p[i] =
        3 * (1 - t) * (1 - t) * (cp[1][i] - cp[0][i]) +
        6 * (1 - t) * t * (cp[2][i] - cp[1][i]) +
        3 * t * t * (cp[3][i] - cp[2][i]);
    }
    return p;
  }

  getSpiralCurve(t: number, cp: number[][]) {
    let r = 100;
    let p = [0, 0];
    p[0] = r * (Math.cos(t) + t * Math.sin(t));
    p[1] = r * (Math.sin(t) - t * Math.cos(t));
    return p;
  }

  getRotationChange(p1: number[], p2: number[]) {
    let s = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    return Math.atan(s);
  }

  getDirection(p1: number[], p2: number[]) {
    let s = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    return s >= 0 ? 1 : -1;
  }

  getSpiralCurveDerviative(t: number, cp: number[][]) {
    let r = 100;
    let p = [0, 0];
    p[0] = r * (t * Math.cos(t));
    p[1] = r * (t * Math.sin(t));
    return p;
  }
}
