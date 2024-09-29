import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MissionDto } from 'src/app/fardamoon-event/models/Mission';
import { UserFormsValuesDto } from 'src/app/rafiqaneh-common/models/UserFormsValuesDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';


interface IContentData{
  formName : string,
  titles:
  [
    {
      titleA: string,
      titleB: string,
    } 
  ]
}
@Component({
  selector: 'app-mbti-missions-timeline',
  templateUrl: './mbti-missions-timeline.component.html',
  styleUrls: ['./mbti-missions-timeline.component.scss'],
})
export class MbtiMissionsTimelineComponent implements OnInit {
  mbtiMissions: MissionDto[] = [
    {
      title: 'برون و درون',
      content: '',
      formName: 'mbti-boroon-daroon-gara',
      link: '/fardamoon/mbti/boroon-daroon-gara',
      status: 'unlocked',
      timer: false,
    },
    {
      title: 'حسی و شهودی',
      content: '',
      formName: 'mbti-shohodi-hessi',
      link: '/fardamoon/mbti/Shohodi-hessi',
      status: 'locked',
      timer: false,
    },
    {
      title: 'احساسی و منطقی',
      content: '',
      formName: 'mbti-ehsasi-manteghi',
      link: '/fardamoon/mbti/ehsasi-manteghi',
      status: 'locked',
      timer: false,
    },
    {
      title: 'منضبط و منعطف',
      content: '',
      formName: 'mbti-ghezavati-edraki',
      link: '/fardamoon/mbti/ghezavati-edraki',
      status: 'locked',
      timer: false,
    },
    {
      title: 'نتیجه نهایی آزمون',
      content: '',
      formName: 'mbti-certificate',
      link: '/fardamoon/mbti/mbti-final-result',
      status: 'locked',
      buttonTitle: 'مشاهده نتیجه',
      timer: false,
    },
  ];

  content : IContentData[] =[
    {
      formName : "mbti-boroon-daroon-gara",
      titles:
      [
        {
          titleA: 'برون گرا',
          titleB: 'درون گرا',
        } 
      ]
    },
    {
      formName : "mbti-shohodi-hessi",
      titles:
      [
        {
          titleA: 'شهودی',
          titleB: 'حسی',
        } 
      ]
    },
    {
      formName : "mbti-ehsasi-manteghi",
      titles:
      [
        {
          titleA: 'احساسی',
          titleB: 'منطقی',
        }
      ]
    },
    {
      formName : "mbti-ghezavati-edraki",
      titles:
      [
        {
          titleA: 'منعطف',
          titleB: 'منضبط',
        }
      ]
      
    },
  ]

  showAudio: boolean =true

  explanation: string =
    ' گردش در این منظومه به خودشناسی بیشترت کمک میکنه تا بفهمی شخصیت تو برای کدوم شغل مناسب تره';

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private formService: FormBuilderService
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
      'mbti-boroon-daroon-gara',
      'mbti-shohodi-hessi',
      'mbti-ehsasi-manteghi',
      'mbti-ghezavati-edraki',
      'mbti-certificate',
    ];
    this.spinner.show();
    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        this.spinner.hide();
        console.log(result);
        for (let i in formNames) {
          let form = formNames[i];
          let mission = this.mbtiMissions.find((s) => s.formName == form);
          if (mission) {
            let formResult = result.find((s) => s.form == form);
            if (formResult) {
              if (formResult.count == 15) {
                mission.status = 'passed';
              } else {
                break;
              }
              if (mission.status == 'passed' && +i < formNames.length - 1) {
                let nextForm = formNames[+i + 1];
                let nexMission = this.mbtiMissions.find(
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
    this.formService.getFormsValues(formNames).subscribe({
      next: (result) => {
        this.spinner.hide();
        console.log(result);
        let personality = '';
        for (let form of formNames) {
          let formResult = result.find((s) => s.form == form);
          if (formResult) {
            personality += this.calculateMbtiPersonlity(formResult);
          }
        }
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }
  calculateMbtiPersonlity(form: UserFormsValuesDto) {
    console.log(form)
    let scoreA = 45;
    let scoreB = 45;
    for (let field of form.fields) {
      if (field.value != null) {
        let s = +field.value - 4;
        scoreA += s;
        scoreB -= s
      }
    }

    const percentResultA = Math.round((scoreA / 90) *100);
    const percentResultB = Math.round((scoreB / 90) *100);

    let formData = this.mbtiMissions.find((result):string=>{
      if(result.formName == form.form){return form.form}
      else{return ''}
    })

    let hosseintitLe = this.content.find((result):string=>{
      if(result.formName == form.form){return form.form}
      else{return ''}
    })

    const finalResultPercent = percentResultA>percentResultB ? percentResultA : percentResultB
    const finalResultTitle = percentResultA>percentResultB ? hosseintitLe?.titles[0].titleA : hosseintitLe?.titles[0].titleB
    
    
    if (formData) {
      formData.content=finalResultTitle+" "+finalResultPercent.toString()
    }
  }
}
