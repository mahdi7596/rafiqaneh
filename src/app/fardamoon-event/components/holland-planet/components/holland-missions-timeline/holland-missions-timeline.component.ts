import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MissionDto } from 'src/app/fardamoon-event/models/Mission';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';

@Component({
  selector: 'app-holland-missions-timeline',
  templateUrl: './holland-missions-timeline.component.html',
  styleUrls: ['./holland-missions-timeline.component.scss'],
})
export class HollandMissionsTimelineComponent implements OnInit {
  hollandMissions: MissionDto[] = [
    {
      title: 'واقع گرا',
      content: '',
      formName: 'holland-vagheh-gara',
      link: '/fardamoon/holland/vagheh-gara',
      status: 'unlocked',
      timer: false,
    },
    {
      title: 'جستجوگر',
      content: '',
      formName: 'holland-jostojo-gara',
      link: '/fardamoon/holland/jostojo-gar',
      status: 'locked',
      timer: false,
    },
    {
      title: 'هنری',
      content: '',
      formName: 'holland-honari',
      link: '/fardamoon/holland/honari',
      status: 'locked',
      timer: false,
    },
    {
      title: 'اجتماعی',
      content: '',
      formName: 'holland-ejtemayee',
      link: '/fardamoon/holland/ejtemayee',
      status: 'locked',
      timer: false,
    },
    {
      title: 'جسور',
      content: '',
      formName: 'holland-jasoor',
      link: '/fardamoon/holland/jasoor',
      status: 'locked',
      timer: false,
    },
    {
      title: 'قراردادی',
      content: '',
      formName: 'holland-gharardadi',
      link: '/fardamoon/holland/gharardadi',
      status: 'locked',
      timer: false,
    },
    {
      title: 'نتیجه نهایی آزمون',
      content: '',
      formName: 'holland-certificate',
      link: '/fardamoon/holland/holland-final-result',
      status: 'locked',
      buttonTitle: 'مشاهده نتیجه',
      timer: false,
    },
  ];
  showAudio:boolean = true
  hollandPercentage !: number ;

  explanation: string =
    ' با جواب دادن به سوالات این منظومه متوجه میشی که به چه حیطه شغلی ای علاقمند هستی';

  constructor(
    private router: Router,
    private formService: FormBuilderService,
    private spinner: NgxSpinnerService
  ) {
    this.updateTimelineStatus();
  }

  onShow(){
    this.showAudio = !this.showAudio
  }

  updateTimelineStatus() {
    let formNames = [
      'holland-vagheh-gara',
      'holland-jostojo-gara',
      'holland-honari',
      'holland-ejtemayee',
      'holland-jasoor',
      'holland-gharardadi',
      'holland-certificate',
    ];
    this.spinner.show();
    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        this.spinner.hide();
        // console.log(result);
        for (let i in formNames) {
          let form = formNames[i];
          let mission = this.hollandMissions.find((s) => s.formName == form);
          if (mission) {
            let formResult = result.find((s) => s.form == form);
            if (formResult) {
              if (formResult.count == 8) {
                mission.status = 'passed';
                this.hollandPercentage = Math.round((formResult.score/40)*100)
                mission.content =this.hollandPercentage.toString() ;

              } else {
                break;
              }
              if (mission.status == 'passed' && +i < formNames.length - 1) {
                let nextForm = formNames[+i + 1];
                let nexMission = this.hollandMissions.find(
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
  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/fardamoon/solar-system']);
  }
}
