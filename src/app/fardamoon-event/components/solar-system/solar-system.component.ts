import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FardamoonService } from '../../services/fardamoon.service';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';

interface IStation  {
  planetName: string,
  class: string,
  activePlanet: string,
  deactivePlanet?: string,
  link: string,
  canOpen: string,
}
@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss'],
})
export class SolarSystemComponent implements OnInit {
  showAudio: boolean = true;
  certificateAvailable = false;
  hollandCompleted = false;
  mbtiCompleted = false;
  gardnerCompleted = false;

  private hollandResult: { [key: string]: number } = {
    'holland-ejtemayee': 8,
    'holland-gharardadi': 8,
    'holland-honari': 8,
    'holland-jasoor': 8,
    'holland-jostojo-gara': 8,
    'holland-vagheh-gara': 8,
  };

  private mbtiResult: { [key: string]: number } = {
    'mbti-boroon-daroon-gara': 15,
    'mbti-shohodi-hessi': 15,
    'mbti-ehsasi-manteghi': 15,
    'mbti-ghezavati-edraki': 15,
  };

  private gardnerResult: { [key: string]: number } = {
    'gardner-kalami': 10,
    'gardner-reyazi': 10,
    'gardner-didari': 10,
    'gardner-badani': 10,
    'gardner-meyan-fardi': 10,
    'gardner-daroon-fardi': 10,
    'gardner-mosighiyaye': 10,
    'gardner-tabeyat-gara': 10,
  };

  constructor(
    private router: Router,
    private fardamoon: FardamoonService,
    private notif: NotificationService
  ) {
    
  }

  ngOnInit(): void {
    this.checkCertificateAvailable();
  }

  stations: IStation[] = [
    {
      planetName: 'رغبت',
      class: 'hollandPlanet',
      activePlanet: 'assets/fardamoon-event/holland-component/s1.png',
      link: 'holland/holland-missions',
      canOpen: 'poletical',
    },
    {
      planetName: 'شخصیت',
      class: 'mbtiPlanet',
      activePlanet:'assets/fardamoon-event/mbti-component/s2-d.png' ,
      link: 'mbti/mbti-missions',
      canOpen: 'family',
    },
    {
      planetName: 'قابلیت',
      class: 'garnerPlanet',
      activePlanet: 'assets/fardamoon-event/garnerd-component/s3-d.png',
      link: 'gardner/gardner-missions',
      canOpen: 'job',
    },
  ];

  checkCertificateAvailable() {
    this.fardamoon.allFormsCount().subscribe({
      next: (r) => {
        let hollandScore = 0;
        for (let k in this.hollandResult) {
          if (
            r.findIndex(
              (s) => s.form_name == k && s.total == this.hollandResult[k]
            ) !== -1
          ) {
            hollandScore += 1;
          }
        }

        this.hollandCompleted =
          hollandScore === Object.keys(this.hollandResult).length;

        let mbtiScore = 0;
        for (let k in this.mbtiResult) {
          if (
            r.findIndex(
              (s) => s.form_name == k && s.total == this.mbtiResult[k]
            ) !== -1
          ) {
            mbtiScore += 1;
          }
        }
        this.mbtiCompleted = mbtiScore === Object.keys(this.mbtiResult).length;

        let gardnerScore = 0;
        for (let k in this.gardnerResult) {
          if (
            r.findIndex(
              (s) => s.form_name == k && s.total == this.gardnerResult[k]
            ) !== -1
          ) {
            gardnerScore += 1;
          }
        }
        this.gardnerCompleted =
          gardnerScore === Object.keys(this.gardnerResult).length;

        console.log(
          this.hollandCompleted,
          this.mbtiCompleted,
          this.gardnerCompleted
        );
        if (this.hollandCompleted) {
          this.stations[1].activePlanet = 'assets/fardamoon-event/mbti-component/s2.png'
        }
        if (this.mbtiCompleted) {
          this.stations[2].activePlanet = 'assets/fardamoon-event/garnerd-component/s3.png'
        }

        this.certificateAvailable =
          this.hollandCompleted && this.mbtiCompleted && this.gardnerCompleted;
      },
    });
  }

  goto(station: string) {
    console.log(station);
    if (
      station != 'fardamoon-planet' &&
      !this.canOpen(station.replace('-station', ''))
    ) {
      this.notif.showError('شما هنوز اجازه ورود به این سرزمین را ندارید :(');
      return;
    }
    if (station == 'mbti/mbti-missions' && !this.hollandCompleted) {
      this.notif.showError('شما هنوز مرحله رغبت را تکمیل نکرده اید :(');
      return;
    }
    if (station == 'gardner/gardner-missions' && !this.mbtiCompleted) {
      this.notif.showError('شما هنوز مرحله شخصیت را تکمیل نکرده اید :(');
      return;
    }
    if (station == 'certificate' && !this.certificateAvailable) {
      this.notif.showError('شما هنوز مراحل دیگر را تکمیل نکرده اید :(');
      return;
    }
    this.router.navigate(['/fardamoon/' + station]);
  }

  // isStationCompleted(station: string) {
  //   return this.fardamoon.isStationCompleted(station);
  // }

  canOpen(station: string) {
    return true;
  }

  get allCompleted() {
    return this.fardamoon.allCompleted();
  }
  onShow() {
    this.showAudio = !this.showAudio;
  }

  goBack() {
    this.router.navigate(['/fardamoon/space']);
  }
}
