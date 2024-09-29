import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';

@Component({
  selector: 'app-gardner-final-result',
  templateUrl: './gardner-final-result.component.html',
  styleUrls: ['./gardner-final-result.component.scss'],
})
export class GardnerFinalResultComponent implements OnInit {
  quizResultName: string = 'قابلیت';

  personalityTypeImage: string = '';
  personalityType: string = '';
  personalityDescription: string = '';
  personalityProperties: string[] = [];

  gardnerPercents : number[]=[] ;
  gardnerNames : string[]=[] ;
  gardnerPercentsReady: boolean = false;
  
  finalResults: {
    formName: string;
    personalityTypeImage: string;
    personalityType: string;
    personalityDescription: string;
    personalityProperties: string[];
  }[] = [
    {
      formName: 'gardner-didari',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/fazayee.jpeg',
      personalityType: 'هوش دیداری-فضایی',
      personalityDescription: `
      هوش فضایی توانایی ذهن در تجسم اشکال، تصاویر، نمودارها، جهت‌یابی‌ها و چنین مواردی را نشان می‌دهد.
      کسانی که دارای هوش تصویری بالایی هستند توانایی تجسمی بالایی دارند و هنرمندان خبره‌ای می‌شوند، و
      معمولا نقاشی‌های شگفت‌انگیزی را طراحی می‌کنند. کسانی که از این استعداد بهره می‌برند در
      جهت‌یابی‌ها، تفسیر تصاویر، فیلم‌ها، نمودارها و نقشه‌ها خوب عمل کنند.
      `,
      personalityProperties: [
        'در تجسم اشکال و تصاویر قوی هستند و می‌توانند هنرمندان توانمندی شوند.',
        'طراحی، ایده‌پردازی، دستکاری تصاویر و فیلم‌ها را به‌خوبی انجام می‌دهند.',
        'نمودارها و اشکال را به‌خوبی تفسیر می‌کنند و می‌توانند اشکال و مجسمه‌های زیبایی بسازند.',
        'در خواندن و نوشتن تبحر دارند و از بازی‌های بصری مثل ساخت پازل لذت می‌برند',
      ],
    },
    {
      formName: 'gardner-reyazi',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/manteghi.jpeg',
      personalityType: 'هوش منطقی – ریاضی',
      personalityDescription: `توانایی بالای افراد در حل مسائل ریاضی مربوط به این حوزه است باید افراد با هوش منطقی و قدرت محاسبات ذهنی بالایی دارند. افراد با این توانایی، می‌توانند مسائل پیچیده و مشکلات را تجزیه‌وتحلیل کرده و ساختارهای محاسباتی و ریاضی را در کمترل زمان حل کنند. افراد دارای هوش منطقی دوست دارند زندگی را با اعداد، الگوها و روابط ریاضی بسنجند و در حل مباحث ریاضی بسیار قوی هستند. `,
      personalityProperties: [
        'به‌راحتی می‌توانند مسائل ریاضی را حل کنند.',
        'توانایی بالایی در انجام آزمایش‌های علمی دارند.',
        'از تفکرات انتزاعی، نمادین و الگوها و استدلال‌های خاص پیروی می‌کنند.',
        'تمام کارهایشان با محاسبه، اندازه‌گیری، درک فرضیه‌ها و حل مشکلات پیش می‌رود.',
        'از انجام بازی‌هایی مثل سودوکو و پیداکردن الگوی شعرها لذت می‌برند. ',
      ],
    },
    {
      formName: 'gardner-kalami',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/zaban-kalami.jpeg',
      personalityType: 'هوش زبانی – کلامی',
      personalityDescription: `هوش زبانی - کلامی توانایی افراد در بیان احساست با نوشتن و صحبت ‌کردن را نشان می‌دهد. افراد در این سخنرانی، خوانندگی و نویسندگی تبحر بالایی دارند و می‌توانند خواسته‌های خود را با چیدن کلمات کنارهم با اعتماد به نفس بالا بیان کنند. افراد با هوش زبانی مفاهیمی مانند معناشناسی، آواشناسی، شناخت قواعد و دستور زبان و کاربرد لغات در شرایط مختلف را دارا هستند.`,
      personalityProperties: [
        'توانایی بالایی در نوشتن و صحبت‌کردن دارند.',
        'می توانند دیگران را متقاعد کنند و در داستان‌سرایی تبحر دارند.',
        'می‌توانند با زبان و گفتار طنز به‌شیوه درست نظر دیگران را جلب کنند.',
        'مسائل پیچیده را به زبانی ساده و شیوا می‌توانند توضیح دهند.',
      ],
    },
    {
      formName: 'gardner-badani',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/badani.jpeg',
      personalityType: 'هوش جنبشی – حرکتی',
      personalityDescription: `افزاد دارای هوش جنبشی - حرکتی در انجام حرکات بدنی سخت و سنگین، کنترل و حفظ تعادل جسمانی بسیار توانمند هستند. این افراد در رشته‌های ورزشی عملکرد موفقی دارند. در  کارهای با هماهنگی بالای چشم و دست و فعالیت‌های فیزیکی، استعدادهایشان را نشان می‌دهند.
      `,
      personalityProperties: [
        'در فعالیت‌های فیزیکی مانند ورزش و رقص عملکرد فوق‌العاده‌ای دارند.',
        'وسایلی که با دست ساخته می‌شوند را دوست دارند.',
        'کارها را به‌جای گوش دادن و نوشتن، با انجام دادن یاد می‌گیرند.        ',
      ],
    },
    {
      formName: 'gardner-mosighiyaye',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/muzik.jpeg',
      personalityType: 'هوش موسیقیایی',
      personalityDescription: `افراد با هوش موسیقیایی درک بالایی در ریتم‌­ها، صداها و الگوهای موسیقی دارند. بسیاری از سازندگان موسیقی و کسانی که در این عرصه فعالیت دارند، از این نوع هوش بهره می‌برند. افراد با این استعداد می‌توانند آلات مختلف موسیقی را به‌خوبی بنوازند و در آوازخوانی، شناسایی الگوی آهنگ‌ها، درک نت‌های موسیقی و به‌خاطر سپردن آنها بسیار توانمند هستند. `,
      personalityProperties: [
        'توانایی بالایی در درک محیط پیرامون و احساسات افراد دارند',
        'به شرایط مختلف از زوایای مختلف نگاه مرده و ان را تجزیه‌وتحلیل می‌کنند.',
        'خیلی سریع اختلافات را رفع می‌کنند و می‌توانند روابط مثبت و سالمی با دیگران برقرار کنند.',
      ],
    },
    {
      formName: 'gardner-meyan-fardi',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/meyan-fardi.jpeg',
      personalityType: 'هوش بین‌فردی',
      personalityDescription: `هوش بین‌فردی درک بالای افراد از محیط پیرامون و مردم و توانایی انجام کارهای گروهی را نشان می‌دهد. افراد دارای این ویژگی به‌راحتی می‌توانند در موقعیت‌های مختلف افراد را درک کرده و با ارزیابی احساسات و انگیزه دیگران، مسائل پیرامون را حل‌وفصل کنند. اگر کسی بدون اینکه احساسات‌تان را بیان کنید عصبانیت یا خوشحالی دیگران درک کند، این شخص از هوش بین‌فردی بالایی برخودار است.`,
      personalityProperties: [
        'در تجسم اشکال و تصاویر قوی هستند و می‌توانند هنرمندان توانمندی شوند.',
        'طراحی، ایده‌پردازی، دستکاری تصاویر و فیلم‌ها را به‌خوبی انجام می‌دهند.',
        'نمودارها و اشکال را به‌خوبی تفسیر می‌کنند و می‌توانند اشکال و مجسمه‌های زیبایی بسازند.',
        'در خواندن و نوشتن تبحر دارند و از بازی‌های بصری مثل ساخت پازل لذت می‌برند',
      ],
    },
    {
      formName: 'gardner-daroon-fardi',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/daroon-fardi.jpeg',
      personalityType: 'هوش درون‌فردی',
      personalityDescription: `توانایی بالای افراد در حل مسائل ریاضی مربوط به این حوزه است باید افراد با هوش منطقی و قدرت محاسبات ذهنی بالایی دارند. افراد با این توانایی، می‌توانند مسائل پیچیده و مشکلات را تجزیه‌وتحلیل کرده و ساختارهای محاسباتی و ریاضی را در کمترل زمان حل کنند. افراد دارای هوش منطقی دوست دارند زندگی را با اعداد، الگوها و روابط ریاضی بسنجند و در حل مباحث ریاضی بسیار قوی هستند. `,
      personalityProperties: [
        'وقت‌شناسی، نظم و مسئولیت‌پذیریی بالایی دارند.',
        'به‌جای صحبت‌کردن، در همدل و شنونده خوبی برای دیگران هستند.',
        'درک درستی از عواطف، احساسات، اهداف و مسیر زندگی خود دارند.',
        'می‌توانند ارتباطات مؤثر و خوبی با دیگران برقرار کنند و در صورت بروز اختلاف  بسیار صلح‌جو هستند.',
      ],
    },
    {
      formName: 'gardner-tabeyat-gara',
      personalityTypeImage: 'assets/fardamoon-event/gardner-percent-result/tabeyat.jpeg',
      personalityType: 'هوش طبیعت‌گرا',
      personalityDescription: `احتمالاْ شما هم طرفداران محیط زیست را می‌شناسید، این‌ها همان افراد با هوش طبیعت‌گرا هستند که به طبیعت و پرورش موجودات اهمیت زیادی می‌دهند و از انجام‌دادن کارهای مؤثر در طبیعت  لذت می‌برند. گیاه‌شناسی، جانورشناسی، کوهنوردی، صحرانوردی و چادر زدن در طبیعت از علایق افراد با هوش طبیعت‌گرا است.`,
      personalityProperties: [
        'به گیاهان، جانوران و هر آنچه با طبیعت در ارتباط است علاقه دارند.',
        'از باغبانی، پیاده‌روی و کاوش در طبیعت لذت می‌برند.        ',
        'مباحث غیر مرتبط با طبیعت را دوست ندارند.        ',
        'بیشتر اوقات از گیاهان و جانوران نگهداری می‌کنند.        ',
      ],
    },
  ];
  

  resultsName = [
    { 
      formName: 'gardner-tabeyat-gara',
      title: 'هوش طبیعت گرا',
      
    },
    {
      formName: 'gardner-meyan-fardi',
      title: 'هوش میان فردی',
      
    },
    {
      formName: 'gardner-badani',
      title: 'هوش بدنی - جنبشی',
      
    },
    {
      formName: 'gardner-daroon-fardi',
      title: 'هوش درون فردی',
      
    },
    {
      formName: 'gardner-kalami',
     title: 'هوش زبانی-کلامی',
        
    },
    {
      formName: 'gardner-reyazi',
     title: 'هوش منطقی - ریاضی',
        
    },
    {
      formName: 'gardner-didari',
     title: 'هوش دیداری - فضایی',
        
    },
    {
      formName:'gardner-mosighiyaye',
     title: 'هوش موسیقیایی',
        
    },
  ]

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private formService: FormBuilderService
  ) {
    this.getGardnerResult();
  }

  ngOnInit(): void {this.calculategardnerPersonlity()}

  goBack() {
    this.router.navigate(['/fardamoon/gardner/gardner-missions']);
  }
  goSolarsystem() {
    this.router.navigate(['/fardamoon/solar-system']);
  }

  getGardnerResult() {
    let formNames = [
      'gardner-tabeyat-gara',
      'gardner-meyan-fardi',
      'gardner-badani',
      'gardner-daroon-fardi',
      'gardner-kalami',
      'gardner-reyazi',
      'gardner-didari',
      'gardner-mosighiyaye',
    ];
    this.spinner.show();
    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        console.log(result)
        this.spinner.hide();
        result.sort((a, b) => a.score - b.score);
        if (result.length > 0) {
          let bestScore = result[result.length - 1].form;
          console.log('best form: ', bestScore);
          let karname = this.finalResults.find((s) => s.formName == bestScore);
          if (karname != null) {
            this.personalityProperties = karname.personalityProperties;
            this.personalityType = karname.personalityType;
            this.personalityTypeImage = karname.personalityTypeImage;
            this.personalityDescription = karname.personalityDescription;
          } else
            console.error('personnel type for formName not defined in json');
        }
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }
  calculategardnerPersonlity() {
    let formNames = [
      'gardner-badani',
      'gardner-daroon-fardi',
      'gardner-didari',
      'gardner-kalami',
      'gardner-meyan-fardi',
      'gardner-mosighiyaye',
      'gardner-reyazi',
      'gardner-tabeyat-gara',
    ];

    for (let form of formNames) {
      let fieldName = '';
     
      this.resultsName.find((resultName)=> {resultName.formName === form ? fieldName = resultName.title:''})

      // let fieldName:any = personality?.title
      this.gardnerNames.push(fieldName)
      console.log(this.gardnerNames)
    }

    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        console.log(result);
        this.spinner.hide();
        result.forEach((r)=> {
          this.gardnerPercents.push(Math.round((r.score / 70) *100) );
          console.log(this.gardnerPercents)
          this.gardnerPercentsReady = true ;
        })

      },
      error: () => {
        this.spinner.hide();
      }
    });
  }
}
