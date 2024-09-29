import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MissionDto } from 'src/app/fardamoon-event/models/Mission';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';

@Component({
  selector: 'app-gardner-missions-timeline',
  templateUrl: './gardner-missions-timeline.component.html',
  styleUrls: ['./gardner-missions-timeline.component.scss'],
})
export class GardnerMissionsTimelineComponent implements OnInit {
  gardnerMissions: MissionDto[] = [
    {
      title: 'هوش زبانی-کلامی',
      content: '',
      formName: 'gardner-kalami',
      link: '/fardamoon/gardner/kalami',
      status: 'unlocked',
      timer: false,
    },
    {
      title: 'هوش منطقی - ریاضی',
      content: '',
      formName: 'gardner-reyazi',
      link: '/fardamoon/gardner/reyazi',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هوش دیداری - فضایی',
      content: '',
      formName: 'gardner-didari',
      link: '/fardamoon/gardner/didari',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هوش بدنی - جنبشی',
      content: '',
      formName: 'gardner-badani',
      link: '/fardamoon/gardner/badani',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هوش میان فردی',
      content: '',
      formName: 'gardner-meyan-fardi',
      link: '/fardamoon/gardner/meyan-fardi',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هوش درون فردی',
      content: '',
      formName: 'gardner-daroon-fardi',
      link: '/fardamoon/gardner/daroon-fardi',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هوش موسیقیایی',
      content: '',
      formName: 'gardner-mosighiyaye',
      link: '/fardamoon/gardner/musical',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هوش طبیعت گرا',
      content: '',
      formName: 'gardner-tabeyat-gara',
      link: '/fardamoon/gardner/naturalistic',
      status: 'locked',
      timer: false,
    },
    {
      title: 'نتیجه نهایی آزمون',
      content: '',
      formName: 'gardner-certificate',
      link: '/fardamoon/gardner/garnder-final-result',
      status: 'locked',
      buttonTitle: 'مشاهده نتیجه',
      timer: false,
    },
  ];

  public gardnerPercentage !: number ;
  explanation: string =
    'سوالات این منظومه بهت کمک میکنه که با استعداد و قابلیتت بیشتر آشنا بشی';


    showAudio: boolean = true
  constructor(
    private router: Router,
    private formService: FormBuilderService,
    private spinner: NgxSpinnerService
  ) {
    this.updateTimelineStatus();
  }

  ngOnInit(): void {}


  onShow(){
    this.showAudio = !this.showAudio
  }
  goBack() {
    this.router.navigate(['/fardamoon/solar-system']);
  }
  updateTimelineStatus() {
    let formNames = [
      'gardner-kalami',
      'gardner-reyazi',
      'gardner-didari',
      'gardner-badani',
      'gardner-meyan-fardi',
      'gardner-daroon-fardi',
      'gardner-mosighiyaye',
      'gardner-tabeyat-gara',
      'gardner-certificate',
    ];
    this.spinner.show();
    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        this.spinner.hide();
        for (let i in formNames) {
          let form = formNames[i];
          let mission = this.gardnerMissions.find((s) => s.formName == form);
          if (mission) {
            let formResult = result.find((s) => s.form == form);
            if (formResult) {
              if (formResult.count == 10) {
                mission.status = 'passed';
                this.gardnerPercentage = Math.round((formResult.score/70)*100)
                mission.content =this.gardnerPercentage.toString() ;
              } else {
                break;
              }
              if (mission.status == 'passed' && +i < formNames.length - 1) {
                let nextForm = formNames[+i + 1];
                let nexMission = this.gardnerMissions.find(
                  (s) => s.formName == nextForm
                );
                if (nexMission) {
                  nexMission.status = 'unlocked';
                }
              }
            }
          }
        }
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }
}
