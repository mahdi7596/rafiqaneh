import { Component, Input, OnInit } from '@angular/core';
import {
  IFormDefinitionDto,
  IMultiStepFormDefinition,
} from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';
import { mbtiPercentResult } from '../boroon-daroon-gara/boroon-daroon-gara.component';
import { IStepCompletedEvent } from 'src/app/rafiqaneh-common/components/form-builder/multi-step-form-builder/multi-step-form-builder.component';

@Component({
  selector: 'app-mbti-questions-base',
  templateUrl: './mbti-questions-base.component.html',
  styleUrls: ['./mbti-questions-base.component.scss'],
})
export class MbtiQuestionsBaseComponent implements OnInit {
  @Input() questionsForm?: IMultiStepFormDefinition;
  @Input() formAnswerCompleted = false;
  @Input() percentResult: mbtiPercentResult = {
    typeA: ' ',
    typeB: ' ',
    userPercentA: 0,
    userPercentB: 0,
    resultExplanation: '',
    resultSuggestion: `
    `,
    personalityTypeImage: ''
  };

  resultsExplain = 
  [
    {
      formName: 'mbti-boroon-daroon-gara',
      personalityTypeImage : 'assets/fardamoon-event/mbti-percent-result/boron-daroon-gara.jpg',
      results: [
        {
          type: 'درون گرا',        
          resultExplanation: 'دنیای درون / ایده ها یا نظرات / تأمل / عمق',
          resultSuggestion: `
          درون گراها اغلب ترجیح میدهند فعالیتهای انفرادی داشته باشند و بیشتر دوست دارند با یک یا دو نفری وقت بگذرانند که احساس قرابت و نزدیکی بیشتری با آنها دارند درون گراها اغلب دارای تأثیری آرام کننده بر اطرافیان خود میباشند و دوست دارند پیش از اقدام به هر کاری دید روشنی از آن داشته باشند. خونسرد متمرکز یا محتاط هستند. با تنها بودن احساس راحتی میکنند و کارهای انفرادی را دوست دارند. ترجیح میدهند روابط کمتر اما صمیمیتری داشته باشند. گاهی اوقات زمان زیادی را به تفکر درباره کاری که می خواهند انجام دهند میپردازند و فورا اقدام نمی کنند.
          `,
        },
      {
        type: 'برون گرا',        
        resultExplanation: 'دنیای بیرون / مردم / عمل / گستردگی',
        resultSuggestion: `
        افراد برون گرا به واسطه درگیری فعال در رویدادها انرژی میگیرند. بیش از همه هنگامی هیجان زده میشوند که در میان جمع باشند و اغلب بر سایر افراد پیرامون خود تأثیری انرژی بخش دارند از نظر سایرین، ممکن است خوش معاشرت و خوشبیان توصیف شوند. برون گراها معمولاً با جهان خارج احساس راحتی می کنند و از آنجا که به سمت جهان بیرون تمایل دارند، اغلب اگر بتوانند درباره مسئله ای حرف بزنند و نظر دیگران را درباره آن بشنوند، نسبت به آن مسئله درک واضح تری خواهند یافت. از نظر دیگران افرادی زرنگ یا «اجتماعی» هستند. در جمع احساس راحتی میکنند و کار گروهی را دوست دارند. طیف گسترده ای از دوستان و آشنایان دارند.
        `,
      }      
    ]
    },
    {
      formName: 'mbti-shohodi-hessi',
      personalityTypeImage : 'assets/fardamoon-event/mbti-percent-result/hessi-shohodi.png',
      results: [
        {
          type: 'شهودی',
          resultExplanation: 'واقعیات / جزئیات / تجربه / زمان حال',
          resultSuggestion: `
          افرادی که ویژگی ادراک شهودی دارند به معانی روابط و احتمالات مبتنی بر حقایق بیش از خود حقایق توجه دارند و اغلب از طریق حس ششم مطالب را درک می کنند. افراد شهودی اغلب با مواردی از لحاظ ذهنی درگیر میشوند که متفاوت و جدید هستند. حافظه آنها در مورد پدیده ها اغلب متشکل از تصویری کلی از اصل و اساس یک رویداد است هنگامی یک موضوع را بهتر یاد میگیرند که از همان ابتدا تصوری کلی از آن داشته باشند. مسائل را از طریق حس ششم و پیش بینی احتمالات حل میکنند و به انجام کارهایی علاقمند هستند که جدید و متفاوت باشند. اعتماد بسیاری به ایده ها تفسیرها و پیش بینی ها دارند و کمتر به آنچه عملا تجربه میشود اطمینان میکـنند به الهام و حرف دل خود احترام میگذارند و نسبت به تغییر شرایط راغب هستند.
          `,
        },
        {
          type: 'حسی',
          userPercent: 0,
          resultExplanation: 'نمادها / الگوهای ذهنی / تئوری / مسائل نظری آینده',
          resultSuggestion: `
          افراد حسی در تجربه های غنی و مداوم حواس پنجگانه غوطه ور می شوند، بنابراین به نظر می رسد بیشتر بر پایه واقعیت فیزیکی و زندگی روزمره عمل می کنند. ذهن آنها تمایل دارد با چیزهایی درگیر شود که عملی در زمان حال جاری و واقعی باشند. افراد حسـی کـه ویژگی آنها تمرکز از طریق حواس پنج گانه است، با توجه به اطلاعات واقعی با موقعیتها برخورد میکنند. بنابراین اغلب حافظه خوبی برای به خاطر سپردن جزئیات دارند، در کار کردن با اطلاعات دقیق هستند برای این افراد، تجربه بسیار مهمتر از گفتار یا مسائل نظری است. این افراد رویدادها را به صورت تصویر یا عکس به خاطر می آورند. مسائل را از طریق بررسی دقیق وضعیت برای درک کامل آن حل می کنند. عمل گرا و کاربردی هستند.
          `,
        }, 
         
      ]
    },     
    {
      formName: 'mbti-ehsasi-manteghi',
      personalityTypeImage : 'assets/fardamoon-event/mbti-percent-result/ehsasi-manteghi.jpg',
      results: [
        {
          type: 'فکری',
          resultExplanation: 'غیر شخصی / عدالت / خونسرد / قاطع',
          resultSuggestion: `
          تفکری ها تلاش میکنند در هر موقعیت بر اساس «عدالت» تصمیم گیری و عمل کنند و این عدالت مستقل از چیزی است که آنها یا دیگران احتمالاً دوست دارند باور کنند یا آرزو کنند کارکرد تفکری با ثبات منطقی سر و کار دارد تیپهای تفکری اغلب روی حل مسئله متمرکز هستند و ممکن است از دید دیگران تحلیلگر خونسرد و منطقی به نظر بیایند. تمايلات فنی یا علمی دارند. در ذهن خود با حقیقت درگیر هستند می خواهند منصف باشند. بر این عقیده هستند که گفتن حقیقت مهم تر از با ادب بودن است. زیرا انها وظیفه محور هستند
          `,
        },
        {
          type: 'احساسی',
          resultExplanation: 'شخصی / ارزش / گرم و صمیمی / رقیق القلب',
          resultSuggestion: `
          افراد احساسی میخواهند بر اساس کاری که در شرایط خاص «خوب» است تصمیم گیری کرده و عمل کنند؛ منظور از «خوب» موردی است که بیشترین نفع را دارد. چنین افرادی ارزش بسیاری برای روابط قائل هستند و دوست دارند در روابط با دیگران هماهنگی ایجاد کنند چنان که افراد احساسی از این کارکرد خود استفاده کرده و آن را توسعه میدهند، ممکن است از دید دیگران با محبت، گرم و صمیمی و با ملاحظه به نظر بیایند. افرادی که ویژگی احساسی دارند به دنبال نقطه نظراتی هستند که برای دیگران مهم است و نگرانی و دغدغه خاطر خود را نسبت به دیگران ابراز میکنند دلسوز هستند با قلبشان تصمیم گیری می کنند و بر این باورند که با ادب بودن مهمتر از بیان واقعیت «تلخ» است. گاهی اوقات از دیدن و در میان گذاشتن حقایق تلخ موقعیتها غافل میشوند و افرادی بیش از حد آرمان گرا و عاطفی به نظر میرسند که معمولا مودب هستند
          `,
        }
      ]
    } ,
    {
      formName: 'mbti-ghezavati-edraki',
      personalityTypeImage : 'assets/fardamoon-event/mbti-percent-result/monatef-sakhtargara.jpg',
      results: [
        {
          type: 'منعطف',
          resultExplanation: 'انعطاف پذیر / پذیرا / انطباق پذیر / خودانگیخته',
          resultSuggestion: `
          این افراد ظاهرا روش زندگی منعطف و غیر قابل پیش بینی را ترجیح میدهند دوست دارند جهان را چنان که هست درک کنند و خود را با آن تطبیق دهند. کنجکاو هستند و از تجربیات جدید استقبال میکنند. ادراکی به معنی ترجیح برای دریافت اطلاعات است انها دوست دارند به استقبال وقایع بروند دوست دارند مراحل انجام کار را به حداقل ممکن کاهش دهند. با کار تفریح میکنند و یا کار را با تفریح در می آمیزند. گاهی اوقات چنان به مدت طولانی درگیر اطلاعات جدید میشوند که فرصت تصمیم گیری را از دست میدهند و غافل میمانند.
          `,
        }, {
          type: 'منضبط',
          resultExplanation: 'ساختارمند / مصمم / سازمان یافته / با برنامه',
          resultSuggestion: `
          این افراد سبک برنامه ریزی شده و منظم را ترجیح  می دهند و دوست دارند مسائل را حل و فصل و سازماندهی آنها زمانی احساس راحتی میکنند که تصمیمات اتخاذ شود و دوست دارند تا جایی که ممکن است زندگی را مدیریت کنند و میخواهند به گونه ای تصمیم گیری کنند که در مجموع زندگی خود را تحت کنترل داشته باشند. 
          قضاوتی بودن به معنی ترجیح دادن موردی بر دیگری در تصمیم گیری است و به معنی قضاوت گر بودن نیست
          تصمیم گیری بر عهده خودشان باشد یا حداقل درتصمیم گیریها دخیل باشند. ظاهراً تكليف محور هستند.
          مایلند فهرستی از کارهایی که باید انجام دهند تهیه کنند. دوست دارند اولویت را به کار بدهند و بعد تفریح
          برای انجام تکالیف برنامه دارند           
          `,
        },
      ]
    }         
             
  ];
  

  constructor(private formService: FormBuilderService) {}

  ngOnInit(): void {}

  formValuesLoaded(form: IFormDefinitionDto) {
    // console.log('form loaded: ', form);
    this.formAnswerCompleted = this.formService.allFormFieldsHasValue(form);
    console.log('formAnswerCompleted: ', this.formAnswerCompleted);
    if (this.formAnswerCompleted) {
      this.calculateMbtiResult(form);
    }
  }

  calculateMbtiResult(form: IFormDefinitionDto) {
    let totalScore = 0;
    let scoreA = 45;
    let scoreB = 45;
    for (let field of form.fields) {
      totalScore += 3;
      if (field.value != null) {
        let s = +field.value - 4;
        scoreA += s;
        scoreB -= s
      }
    }
    this.percentResult.userPercentA = Math.round(scoreA / (totalScore*2) * 100);
    this.percentResult.userPercentB = Math.round(scoreB / (totalScore*2) * 100);
    let result = this.resultsExplain.find(s => s.formName == form.formName);
    if (result) {

      this.percentResult.personalityTypeImage = result.personalityTypeImage;
      this.percentResult.typeA = result.results[0].type;
      this.percentResult.typeB = result.results[1].type;
      if (scoreB > scoreA) {
        this.percentResult.resultExplanation = result.results[1].resultExplanation;
        this.percentResult.resultSuggestion = result.results[1].resultSuggestion;
      } else 
      {
        this.percentResult.resultExplanation = result.results[0].resultExplanation;
        this.percentResult.resultSuggestion = result.results[0].resultSuggestion;
      }
    }
  }

  stepsCompleted(s: IStepCompletedEvent) {
    // console.log('step done:', s);
    this.formValuesLoaded(s.step.form);
  }
}
