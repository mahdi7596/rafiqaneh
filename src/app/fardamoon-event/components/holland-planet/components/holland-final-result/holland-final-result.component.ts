import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserFormsValuesDto } from 'src/app/rafiqaneh-common/models/UserFormsValuesDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';

@Component({
  selector: 'app-holland-final-result',
  templateUrl: './holland-final-result.component.html',
  styleUrls: ['./holland-final-result.component.scss']
})
export class HollandFinalResultComponent implements OnInit {
  quizResultName: string = 'رغبت ';

  personalityTypeImage: string = '';
  personalityType: string = '';
  personalityDescription: string = '';
  personalityProperties: string[] = [];

  hollandPercents: number[]=[] ;
  hollandnames: string[]=[] ;
  hollandPercentsReady: boolean = false;

  finalResults = [
    {
      personalityType: 'واقع‌گرا',
      formName: 'holland-vagheh-gara',
      personalityTypeImage: 'assets/fardamoon-event/holland-percent-result/vaghe-gara.jpg',
      personalityDescription: `
      از خصوصیات افرادی که در این طبقه قرار می‌گیرند، می‌توان جدیت در کار، واقع‌بینی در امور، مهارت‌های مکانیکی، تفکر عملی، قدرت جسمانی، علاقه و هماهنگی در کارها را نام برد. فرد واقع‌بین، چنانچه با مشکلی مواجه شود، راه‌حل‌های عملی برای مشکلات جستجو می‌کند. این افراد بیشتر به مشاغلی که نیازمند مهارت‌های فنی است، روی می‌آورند. این افراد علاقمند به کار با وسایل و ماشین‌ها و بی‌علاقه به فعالیت‌های آموزشی و درمانی هستند. از نظر صفات شخصیتی، این افراد اهل عمل، خودمحور، صرفه‌جو، سرسخت و غیراجتماعی هستند. مشاغل مناسب این افراد عبارتند از مشاغل فنی، کشاورزی و بعضی از مشاغل خدماتی؛  `,

      personalityProperties: [
        'مهندسی مکانیک',
        'مهندس ماشین‌آلات سنگین',
        'خلبان',
        'تکنسین (در هر رشته‌ای)',
        'تعمیرات و تأسیسات (در هر رشته‌ای)',
        'جوشکار',
        'تراشکار',
        'افسر ارتش',
        'فعالیت در حوزه تربیت بدنی',
        'جنگل‌داری',
        'مشاغل ایمنی تجهیزات',
        'مبلمان‌سازی',
        'ساخت و تعمیر ابزار آلات موسیقی',
        'قالب‌سازی',
        'و به طور کلی هر نوع شغلی که در ارتباط با اشیاء و ابزار باشد و جنبۀ فنی و تکنیکی داشته باشد.'
      ]
    },
    {
      personalityType: 'جستجوگر',
      formName: 'holland-jostojo-gara',
      personalityTypeImage: 'assets/fardamoon-event/holland-percent-result/jostojogar.jpg',
      personalityDescription: `
    از خصوصیات بارز افراد با امتیاز بالا تفکر، سازمان‌دهی، قدرت و استدلال است. این طبقه از افراد روابط اجتماعی را زیاد دوست ندارند. گاه به رویاپردازی در مورد پیشرفت‌های آینده‌ی خود مبادرت می‌ورزند و از انجام مشاغل پیچیده که نیاز به تفکر دارد، لذت می‌برند. این افراد خلاق، مستقل، پیشرونده، کمرو و محتاط می‌باشند. علاقمند به پژوهش و کارهای علمی در زمینه‌های ریاضی، فیزیک، شیمی، زیست‌شناسی و بی‌علاقه به فعالیت‌های متهورانه(جسورانه و پر ریسک) هستند.
    `,
      personalityProperties: [
        'پزشک',
        'فیزیکدان',
        'جراح',
        'شیمیدان',
        'دندانپزشک',
        'ریاضی‌دان',
        'داروساز',
        'کارشناس علوم و فنون هسته‌ای',
        'مهندسی هوا و فضا',
        'اقتصاددان',
        'مهندس طراح سیستم',
        'دامپزشک',
        'زمین‌شناس',
        'زیست‌شناس',
        'نویسنده علمی',
        'جامعه‌شناس',
        'منجم',
        'مهندس (عمران، الکترونیک، کشاورزی و …)',
        'پژوهشگر',
        'روانپزشک',
        'روانشناس',
        'استاد دانشگاه',
        'بیولوژیست',
        'جغرافی‌دان',
        'وبه طور کلی هر نوع شغلی که به داده ها بپردازد و مستلزم پژوهش و تحقیق مداوم باشد.'
      ]
    },
    {
      personalityType: 'اجتماعی',
      formName: 'holland-ejtemayee',
      personalityTypeImage: 'assets/fardamoon-event/holland-percent-result/ejtemayee.jpg',
      personalityDescription: `
    و به طور کلی هر نوع شغلی که در ارتباط با مردم است و آموزش، تدریس و رفاه اجتماعی را مدنظر دارد.
    `,

      personalityProperties: [
        'معلم',
        'مدیر مدرسه',
        'مربی الهیات و علوم دینی',
        'مربی تربیتی',
        'جامعه‌شناس',
        'روانشناس',
        'مشاور خانواده',
        'مدیر مهدکودک',
        'کارشناس / مدیر کتابداری',
        'کارشناس / مدیر بخش آموزش',
        'مربی مهدکودک',
        'فیزیوتراپیست',
        'روانکاو',
        'مدیر سازمان‌های خیریه',
        'استاد دانشگاه',
        'پرستار',
        'مورخ',
        'مدیر کارگزینی',
        'رئیس پلیس',
        'کارشناس مطالعات خانواده',
        'روانشناس صنعتی',
        'مشاور تحصیلی',
        'مشاور شغلی',
        'کارشناس روابط عمومی',
        'مددکار اجتماعی',
        'کاردان بهداشت دهان و دندان',
        'افسر پلیس',
        'مأمور آگاهی',
      ]
    },
    {
      personalityType: 'قراردادی',
      formName: 'holland-gharardadi',
      personalityTypeImage: 'assets/fardamoon-event/holland-percent-result/gharardadi.jpg',
      personalityDescription: `
     این عده احترام خاصی برای حفظ قوانین و مقررات قایل‌اند و به خوبی به کنترل خویش قادر می‌باشند. دوستدار نظم و ترتیب بوده و از موقعیت‌های پیچیده گریزانند و به فعالیت‌های جسمانی تن در نمی‌دهند. به امور دفتری، تنظیم اطلاعات نوشتاری و پردازش داده‌ها علاقمندبوده و به بی‌نظمی و امور هنری علاقمند نیستند.       `,
      personalityProperties: [
        'معلم',
        'مدیر مدرسه',
        'مربی الهیات و علوم دینی',
        'مربی تربیتی',
        'جامعه‌شناس',
        'روانشناس',
        'مشاور خانواده',
        'مدیر مهدکودک',
        'کارشناس / مدیر کتابداری',
        'کارشناس / مدیر بخش آموزش',
        'مربی مهدکودک',
        'فیزیوتراپیست',
        'روانکاو',
        'مدیر سازمان‌های خیریه',
        'استاد دانشگاه',
        'پرستار',
        'مورخ',
        'مدیر کارگزینی',
        'رئیس پلیس',
        'کارشناس مطالعات خانواده',
        'روانشناس صنعتی',
        'مشاور تحصیلی',
        'مشاور شغلی',
        'کارشناس روابط عمومی',
        'مددکار اجتماعی',
        'کاردان بهداشت دهان و دندان',
        'افسر پلیس',
        'مأمور آگاهی',
        ' وبه طور کلی هر نوع مشاغلی که توجه و دقت به جزئیات و ریزه کاری در داده ها بپردازد.'
      ]
    },
    {
      personalityType: 'جسور',
      formName: 'holland-jasoor',
      personalityTypeImage: 'assets/fardamoon-event/holland-percent-result/jasoor.jpg',
      personalityDescription: `
    افراد نوع تهوری در گویایی بسیار مهارت دارند. ماجراجو و اجتماعی هستند. در فعالیت‌هایشان نقش غالبی بر عهده دارند. در جستجوی قدرت و موقعیت بوده و همواره می‌کوشند تا رهبر باشند و در امور مالی و تجاری نظایر آنها مهارت کسب می‌کنند. علاقمندی به فعالیت‌های رهبری، مدیریت، سیاسی و کسب درآمد اقتصادی و بی‌علاقه به امور پژوهشی هستند.       `,
      personalityProperties: [
        'مدیر بازرگانی',
        'بازاریاب',
        'رهبری',
        'مدیر هتل و رستوران',
        'کارشناس حقوق و علوم قضایی',
        'دادستان',
        'قاضی',
        'مدیر امور جهانگردی',
        'خرده فروش',
        'رئیس دانشگاه',
        'مترجم',
        'کارآگاه خصوصی',
        'مشاور املاک',
        'مشاور مالی و سهام',
        'تاجر',
        'سیاستمدار',
        'واسطه‌گر',
        'مدیر منابع انسانی',
        'مدیر دولتی',
        'مدیر اجرایی',
        'نماینده مجلس',
        'مشاور مدیریت',
        'مدیر شرکت خصوصی',
        'مهماندار هواپیما',
        'رئیس اتاق بازرگانی',
        'سرپرست آموزش',
        'حسابدار مالیاتی',
        'بازرس بهداشت محیط کار',
        'مدیر بانک',
        'مدیر شرکت بیمه',
        'مدیر خدمات مجالس و مهمانی‌ها',
        'مأمور خرید',
        'مأمور فروش',
        'وکیل',
        'کارشناس علوم سیاسی',
        'کارشناس روابط بین‌الملل',
        'مدیر فرودگاه',
        'مهندس صنایع',
        'و به طور کلی هر نوع مشاغلی که در ارتباط با مردم است و اهداف سازماندهی، مدیریت و فروشندگی را دارا می باشد.'
      ]
    },
    {
      personalityType: 'هنری',
      formName: 'holland-honari',
      personalityTypeImage: 'assets/fardamoon-event/holland-percent-result/honari.jpg',
      personalityDescription: `
     افراد این طبقه در شناسایی و بیان خصوصیات خود مهارت دارند. روابط حسنه‌ای با دیگران برقرار نموده و در عین حال از نظم و ترتیب به دوراند. در روابط خود با دیگران حساس‌اند. کمتر به کنترل خود می‌پردازند و به سادگی در مورد عواطف و احساسات خود گفتگو می‌کنند. این عده به صفات زنانه بیش از صفات مردانه گرایش دارند و به مبارزه با مشکلات محیطی از طریق ارایه‌ی آثار هنری اقدام می‌نمایند. نسبت به انجام فعالیت‌های پیچیده و ابتکاری و هنری علاقمند هستند.  `,
      personalityProperties: [
        'معماری',
        'طراح تبلیغات',
        'فیلمنامه‌نویس',
        'خوشنویس',
        'شاعر',
        'بازیگر',
        'خبرنگار، روزنامه‌نگار',
        'کارشناس میراث فرهنگی',
        'داستان‌نویس',
        'فیلمبردار',
        'نوازنده',
        'مردم‌شناس',
        'باستان‌شناس',
        'کارشناس علوم ارتباطات',
        'مشاغل مربوط به هنرهای تجسمی، تزئینی و نمایشی',
        'سردبیر مجله و روزنامه',
        'طراح گرافیک',
        'طراح لباس و مد',
        'طراح صحنه',
        'طراح داخلی',
        'انیماتور',
        'ویراستار',
        'طراح صنعتی',
        'طراح پارچه',
        'کارشناس صنایع دستی',
        'گرافیست رایانه‌ای',
        'مترجم زبان‌های خارجی',
        'نویسنده',
        'روانشناس اجتماعی',
        'کارشناس ادبیات فارسی',
        'کارشناس ادبیات زبان‌های خارجی',
        'موسیقیدان / آهنگساز',
        'کارگردان',
        'نقاش',
        'عکاس',
        'کارشناس چاپ',
        'کارشناس مرمت و احیای آثار باستانی',
        'کارشناس فرش',
        'به طور کلی هر نوع مشاغلی که در ارتباط با داده ها و اشیاء باشد و جنبۀ خلاقیت و ابتکار و آثار هنری فرد را ارج نهد و به نوعی با طراحی و دیزاین در ارتباط است.'
      ]
    }
  ]

  resultsName = [
    {
      formName: 'holland-vagheh-gara',
     title: 'واقع گرا',
        
    },
    {
      formName: 'holland-jostojo-gara',
     title: 'جستوجوگر',
        
    },
    {
      formName: 'holland-honari',
     title: 'هنری',
        
    },
    {
      formName: 'holland-ejtemayee',
     title: 'اجتماعی',
        
    },
    {
      formName: 'holland-jasoor',
     title: 'جسور',
        
    },
    {
      formName: 'holland-gharardadi',
     title: 'قراردادی',
        
    },
  
  ];
  constructor(private router: Router, private spinner: NgxSpinnerService,
    private formService: FormBuilderService
  ) {
    this.getHollandResult();
  }

  ngOnInit(): void { this.calculatehollandPersonlity()}

  goBack() {
    this.router.navigate(['/fardamoon/holland/holland-missions']);
  }
  goSolarsystem() {
    this.router.navigate(['/fardamoon/solar-system']);
  }

  

  getHollandResult() {
    let formNames = ['holland-vagheh-gara', 'holland-jostojo-gara', 'holland-honari', 'holland-ejtemayee', 'holland-jasoor', 'holland-gharardadi'];
    this.spinner.show();
    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        console.log(result);
        this.spinner.hide();
        result.sort((a, b) => a.score - b.score);
        if (result.length > 0) {
          let bestScore = result[result.length - 1].form;
          console.log('best form: ', bestScore);
          let karname = this.finalResults.find(s => s.formName == bestScore);
          if (karname != null) {
            this.personalityProperties = karname.personalityProperties;
            this.personalityType = karname.personalityType;
            this.personalityTypeImage = karname.personalityTypeImage;
            this.personalityDescription = karname.personalityDescription;
          }
        }


      },
      error: () => {
        this.spinner.hide();
      }
    });
  }

  calculatehollandPersonlity() {
    let formNames = ['holland-ejtemayee', 'holland-gharardadi', 'holland-honari' ,'holland-jasoor', 'holland-jostojo-gara', 'holland-vagheh-gara' ,];
   
    for (let form of formNames) {
      let fieldName = '';
      // this.resultsName.find((resultName) => {
      //   if(resultName.formName === form) {
      //     fieldName = resultName.title
      //   }
      // })

      this.resultsName.find((resultName)=> {resultName.formName === form ? fieldName = resultName.title:''})

      // let fieldName:any = personality?.title
      this.hollandnames.push(fieldName)
      console.log(this.hollandnames)
    }
    this.formService.getUserFormsStats(formNames).subscribe({
      next: (result) => {
        console.log(result);
        this.spinner.hide();
        result.forEach((r)=> {
          this.hollandPercents.push(Math.round((r.score / 40) *100) );
          console.log(this.hollandPercents)
        })
        this.hollandPercentsReady = true ;

      },
      error: () => {
        this.spinner.hide();
      }
    });
  }
}
