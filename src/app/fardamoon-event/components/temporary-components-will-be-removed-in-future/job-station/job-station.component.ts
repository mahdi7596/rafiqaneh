import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';
import { StationAnswer } from '../../../models/StationAnswer';
import { FardamoonService } from '../../../services/fardamoon.service';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-job-station',
  templateUrl: './job-station.component.html',
  styleUrls: ['./job-station.component.scss'],
})
export class JobStationComponent implements OnInit, OnDestroy {
  startGame: boolean = false;

  karmoonSecondYearChallenge: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
    returnUrl: '/fardamoon/job-station',
    steps: [
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'road',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱.اولین مسیر حرفه ای ما تست کیفیت قطعات است نظرت نسبت به این ماجرا چیه؟',
              classes: 'mt-4',
              fieldTitle: 'تست کیفیت قطعات',
              validation: { isRequired: false },
            },
            {
              fieldName: 'humanBody',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲. دوست داری که ساختار بدن انسان را مطالعه بکنی و در مورد اون بیشتر بدونی؟',
              classes: 'mt-4',
              fieldTitle: 'ساختار بدن انسان',
              validation: { isRequired: false },
            },
            {
              fieldName: 'music',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳. راستی به نظرت چقدر توانایی داری که یک گروه موسیقی را رهبری بکنی؟              ',
              classes: 'mt-4',
              fieldTitle: 'گروه موسیقی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'jobSuggestion',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴.توانایی مشاوره شغلی دادن رو تو خودت میبینی ؟',
              classes: 'mt-4',
              fieldTitle: 'مشاوره شغلی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'sellFood',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۵.آیا دوست داری جای آقا محمود نمایندگی رستوران های اکبر جوجه رو به افراد مختلف بفروشی؟',
              classes: 'mt-4',
              fieldTitle: 'نمایندگی رستوران',
              validation: { isRequired: false },
            },
            {
              fieldName: 'accounting',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۶.به نظرت میتونی توی بخش حسابداری چک های حقوق ماهانه کارمندان رو تنظیم کنی؟',
              classes: 'mt-4',
              fieldTitle: 'بخش حسابداری',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت ۱ سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'building',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷.چقدر میتونی آجر ها یا کاشی های یک ساختمون رو بچینی؟',
              classes: 'mt-4',
              fieldTitle: 'آجر ها یا کاشی های یک ساختمون',
              validation: { isRequired: false },
            },
            {
              fieldName: 'animal',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۸.دوست داری رفتار حیوانات رو مطالعه کنی؟',
              classes: 'mt-4',
              fieldTitle: 'رفتار حیوانات',
              validation: { isRequired: false },
            },
            {
              fieldName: 'manageGame',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۹.بازی کردن رو قطعا باید دوست داشته باشی ،چقدر دوست داری یک بازی رو مدیریت کنی و هدایتگر اون باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'مدیریت بازی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'help',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۰.علاقه مند به انجام کار داوطلبانه در سازمان های مردم نهاد هستی ؟',
              classes: 'mt-4',
              fieldTitle: 'انجام کار داوطلبانه',
              validation: { isRequired: false },
            },
            {
              fieldName: 'sellProduct',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۱.چقدر دوست داری جای خانم عبدی توی فروشگاه کالاهای مختلف بفروشی؟',
              classes: 'mt-4',
              fieldTitle: 'فروشگاه کالاهای مختلف',
              validation: { isRequired: false },
            },
            {
              fieldName: 'listProduct',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۲.به نظر خودت میتونی جای آقای اکبری لیست اموال موجود در یک محل رو تهیه کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'لیست اموال',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت 2 سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'oilSea',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۳.کار بر روی دکل نفت دریایی رو چقدر دوست داری؟',
              classes: 'mt-4',
              fieldTitle: 'دکل نفت دریایی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'plants',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۴.تحقیقات پیرامون گیاهان و موجودات زنده رو به عنوان شغل می‌پسندی؟',
              classes: 'mt-4',
              fieldTitle: 'گیاهان و موجودات زنده',
              validation: { isRequired: false },
            },
            {
              fieldName: 'art',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۵.چقدر دوست داری جای خانم رضایی طراح آثار هنری مجلات باشی؟',
              classes: 'mt-4',
              fieldTitle: 'آثار هنری مجلات',
              validation: { isRequired: false },
            },
            {
              fieldName: 'addicted',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۶.دوست داری با فعالیت خودت به افراد معتاد کمک کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'افراد معتاد',
              validation: { isRequired: false },
            },
            {
              fieldName: 'hotel',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۷.فکر می‌کنی میتونی جای خانم و آقای جعفری مدیر اجرایی هتل این سیاره باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'مدیر اجرایی هتل',
              validation: { isRequired: false },
            },
            {
              fieldName: 'financial',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۱۸.چقدر علاقه به تهیه صورتحساب های مالی مشتریان یک شرکت داری ؟',
              classes: 'mt-4',
              fieldTitle: 'مصورتحساب های مالی مشتریان',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت 3 سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'electronic',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۹.دوست داری قطعات الکترونیکی رو جمع آوری کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'قطعات الکترونیکی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'cure',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲۰.به نظرت میتونی یک روش درمانی جدید رو توسعه بدی یا ابداع کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'روش درمانی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'poem',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۱.چقدر دوست داری شعر جدید بنویسی ؟',
              classes: 'mt-4',
              fieldTitle: 'شعر',
              validation: { isRequired: false },
            },
            {
              fieldName: 'park',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲۲.خیلی خوب میشه بتونیم داخل پارک ها ورزش روزانه داشته باشیم به نظرت تو میتونی این امر رو محقق کنی و مسئول این بخش باشی؟',
              classes: 'mt-4',
              fieldTitle: 'مسئول',
              validation: { isRequired: false },
            },
            {
              fieldName: 'beautySalon',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲۳.چقدر خودت رو در اداره یک مرکز و سالن زیبایی ماهر میبینی؟',
              classes: 'mt-4',
              fieldTitle: 'سالن زیبایی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'folders',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲۴.دوست داری تو قسمت بایگانی یک اداره از پرونده ها و سوابق کارمندان نگهداری کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'قسمت بایگانی',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت 3 سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'factory',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۵.دوست داری ماشین سنگ بری یک‌ کارخونه رو راه بندازی ؟',
              classes: 'mt-4',
              fieldTitle: 'ماشین سنگ بری',
              validation: { isRequired: false },
            },
            {
              fieldName: 'biology',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۶.چقدر علاقه مند به تحقیقات زیست شناسی هستی؟',
              classes: 'mt-4',
              fieldTitle: 'زیست شناسی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'writeBook',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲۷.دوست داری جای خالی نویسنده های این سیاره رو پر کنی و کتاب بنویسی ؟',
              classes: 'mt-4',
              fieldTitle: 'کتاب بنویسی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'familyProblem',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۲۸.چقدر دوست داری به افراد جهت حل مشکلات خانوادگی اونها کمک کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'حل مشکلات خانوادگی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'companyManager',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۹.دوست داری جای آقای موسوی مدیر بخش تقسیم شرکت بشی؟',
              classes: 'mt-4',
              fieldTitle: 'مدیر بخش تقسیم شرکت',
              validation: { isRequired: false },
            },
            {
              fieldName: 'data',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳۰.فکر می‌کنی توی سازمان آمار و بخش ثبت داده های آماری چقدر میتونی کمک کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'سازمان آمار',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت 4 سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'waterPipe',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳۱.به نظرت اگر شیر آب یا لوله ای توی خونتون خراب بشه میتونی تعمیرش کنی ؟چقدر به این کار علاقه داری؟',
              classes: 'mt-4',
              fieldTitle:
                'به نظرت اگر شیر آب یا لوله ای توی خونتون خراب بشه میتونی تعمیرش کنی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'ocean',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳۲.دوست داری به تیم تحقیقاتی این سیاره که در اقیانوس کاراییب کار می‌کنه بپیوندی و در مورد جانوران آبزی تحقیق کنی ؟              ',
              classes: 'mt-4',
              fieldTitle: 'اقیانوس کاراییب',
              validation: { isRequired: false },
            },
            {
              fieldName: 'painting',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۳.فکر می‌کنی تو طراحی و نقاشی میتونی مفید باشی؟',
              classes: 'mt-4',
              fieldTitle: 'طراحی و نقاشی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'school',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳۴.اگر با مدرسه به اردو بری چقدر دوست داری سرپرستی بچه ها رو به عهده بگیری ؟',
              classes: 'mt-4',
              fieldTitle: 'مدرسه به اردو بری',
              validation: { isRequired: false },
            },
            {
              fieldName: 'cloths',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۵.به نظرت چقدر توانایی مدیریت یک فروشگاه پوشاک رو داری؟',
              classes: 'mt-4',
              fieldTitle: 'چقدر توانایی مدیریت یک فروشگاه پوشاک رو داری؟',
              validation: { isRequired: false },
            },
            {
              fieldName: 'calculator',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳۶.به نظرت توانایی تعمیر و راه اندازی یک ماشین حساب رو داری ؟',
              classes: 'mt-4',
              fieldTitle: 'تعمیر و راه اندازی یک ماشین حساب',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت 5 سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'collectFactory',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۷.میتونی محصولات یک کارخونه رو جمع آوری کنی؟',
              classes: 'mt-4',
              fieldTitle: 'کارخونه رو جمع آوری کنی؟',
              validation: { isRequired: false },
            },
            {
              fieldName: 'bioLab',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۳۸.دوست داری تو یک آزمایشگاه زیست شناسی فعالیت داشته باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'آزمایشگاه زیست شناسی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'tvShow',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۹.دوست داری بدل کاری در یک فیلم تلویزیونی رو انجام بدی؟',
              classes: 'mt-4',
              fieldTitle: 'فیلم تلویزیونی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'teachKids',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۰.چقدر دوست داری به کودکان خواندن و نوشتن یاد بدی؟',
              classes: 'mt-4',
              fieldTitle: 'کودکان خواندن و نوشتن',
              validation: { isRequired: false },
            },
            {
              fieldName: 'realEstate',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۴۱.به نظرت توی فروش خانه به عنوان یک املاکی چقدر میتونی موفق باشی؟',
              classes: 'mt-4',
              fieldTitle: 'عنوان یک املاکی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'bankCustomer',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۴۲. برای یک مشتری چقدر میتونی مدیریت معاملات بانکی رو انجام بدی؟',
              classes: 'mt-4',
              fieldTitle: 'مدیریت معاملات بانکی',
              validation: { isRequired: false },
            },
          ],
        },
        stepTitle: 'قسمت 6 سوالات',
      },
      {
        form: {
          formName: 'karmoon2-planet',
          fields: [
            {
              fieldName: 'installKafposh',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۴۳.دوست داری توی کار اجرایی مثل نصب کفپوش در منازل فعال باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'نصب کفپوش در منازل',
              validation: { isRequired: false },
            },
            {
              fieldName: 'mapOcean',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۴۴.به نظرت میشه از زیر اقیانوس نقشه کشید؟و تو میتونی این کار رو انجام بدی؟',
              classes: 'mt-4',
              fieldTitle: 'اقیانوس نقشه کشید',
              validation: { isRequired: false },
            },
            {
              fieldName: 'theatr',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۵.چقدر دوست داری یک تئاتر طراحی کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'تئاتر طراحی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'helpOld',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۴۶.دوست داری به سالمندان برای انجام کارهای روزمره خودشون کمک کنی؟',
              classes: 'mt-4',
              fieldTitle: 'کارهای روزمره',
              validation: { isRequired: false },
            },
            {
              fieldName: 'toyStore',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۷.به نظرت میتونی یک فروشگاه اسباب بازی راه اندازی کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'فروشگاه اسباب بازی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'peopleFolder',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label:
                '۴۸.چقدر دوست داری در جابه جایی و پیگیری پرونده های افراد فعال باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'جایی و پیگیری پرونده',
              validation: { isRequired: false },
            },
            {
              fieldName: 'submit',
              type: 'input',
              inputType: 'hidden',
              value: 'true',
            },
          ],
        },
        stepTitle: 'قسمت 7 سوالات',
      },
    ],
  };

  karmoon2Progress?: { completedAt?: number; scores: number };
  karmoon3Progress?: { completedAt?: number; scores: number };
  karmoon4Progress?: { completedAt?: number; scores: number };

  numQuestions = 4;
  activeQuestion = 0;
  answers: StationAnswer[] = [];

  questionVoices: {
    question: number;
    audio: HTMLAudioElement;
    autoPlayCompleted: boolean;
  }[] = [];
  currentAudio?: HTMLAudioElement;
  currentAnswer: StationAnswer = {
    answer: '',
    question: 0,
    station: 'job',
  };

  hintCardContent = 'به سیاره ی';
  hintCardActiveContent = 'کارمون';
  hintCardRestOfContent =
    'خوش اومدی به راهنمایی های من خوب گوش کن تا همه ی سوالاتو دقیق جواب بدی';

  get isLastQuestion() {
    return this.activeQuestion == this.numQuestions - 1;
  }

  get isFirstQuestion() {
    return this.activeQuestion == 0;
  }

  get hasVoice() {
    return (
      this.questionVoices.findIndex(
        (s) => s.question === this.activeQuestion
      ) !== -1
    );
  }
  onStartGame() {
    this.startGame = true;
  }

  stepsCompleted(event: any) {
    console.log(event);
    if (event.scoreChanged > 0) {
      this.notifications.showMessage(
        'تبریک! شما با اتمام این پویش ' +
          event.scoreChanged +
          ' امتیاز دریافت کردید',
        'info'
      );
    }
    if (event.planetProgress) {
      this.fardamoon.updateScores(event.planetProgress);
    }
    this.router.navigate(['/', 'fardamoon', 'job-station']);
  }

  constructor(
    private notification: NotificationService,
    private router: Router,
    private fardamoon: FardamoonService,
    private karmoon: KarmoonService,
    private notifications: NotificationService,
    private spinnerService: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.questionVoices.push({
      question: 1,
      autoPlayCompleted: false,
      audio: new Audio('assets/fardamoon/voices/1.mp3'),
    });
    this.questionVoices.push({
      question: 2,
      autoPlayCompleted: false,
      audio: new Audio('assets/fardamoon/voices/2.mp3'),
    });
    this.questionVoices.push({
      question: 3,
      autoPlayCompleted: false,
      audio: new Audio('assets/fardamoon/voices/3.mp3'),
    });

    this.fardamoon.answersLoaded$.subscribe({
      next: (r) => {
        this.answers = r.filter((s) => s.station === 'job');
        let a = this.answers.find((s) => s.question === this.activeQuestion);
        if (a) this.currentAnswer = a;
      },
    });
    this.spinnerService.show();
    this.karmoon.getKarmoonProgress().subscribe({
      next: (s) => {
        spinnerService.hide();
        if (s.karmoon2?.completedAt) {
          this.router.navigateByUrl('/fardamoon/job-station');
        }
      },
      error: () => {
        spinnerService.hide();
      },
    });

    activatedRoute.queryParams.subscribe((params) => {
      if (params['step']) {
        this.karmoonSecondYearChallenge.currentStep = +params['step'] ?? 0;
        console.log(
          'step loaded: ',
          this.karmoonSecondYearChallenge.currentStep
        );
        if (this.karmoonSecondYearChallenge.currentStep > 0) {
          this.startGame = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.questionVoices.forEach((s) => {
      s.audio.load();
      s.audio.onended = (a) => {
        s.autoPlayCompleted = true;
      };
    });
    this.autoPlayCurrentVoice();
  }

  ngOnDestroy(): void {
    this.currentAudio?.pause();
  }

  goNextQuestion() {
    if (this.isLastQuestion) return;
    if (this.activeQuestion + 1 > this.answers.length) {
      this.notification.showError('هنوز پاسخ این سوال را ثبت نکردید :(');
      return;
    }
    this.activeQuestion += 1;
    this.loadCurrentAnswer();
    this.autoPlayCurrentVoice();
  }

  goPreviousQuestion() {
    if (this.isFirstQuestion) return;
    this.activeQuestion -= 1;
    this.loadCurrentAnswer();
    this.autoPlayCurrentVoice();
  }

  registerCurrentAnswer(answer: string) {
    this.fardamoon
      .registerAnswer({
        answer: answer,
        question: this.activeQuestion,
        station: 'job',
      })
      .subscribe({
        next: (r) => {
          let existAnswer = this.answers.find(
            (s) => s.question === this.activeQuestion
          );
          if (existAnswer) {
            existAnswer.answer = answer;
          } else {
            this.answers.push(this.currentAnswer);
          }
          this.notification.showMessage(
            'پاسخ سوال شماره ' +
              (this.activeQuestion + 1) +
              ' با موفقیت ثبت شد',
            'info'
          );
          if (this.activeQuestion === this.numQuestions - 1) {
            this.router.navigate(['/fardamoon/job-station']);
            return;
          } else {
            this.goNextQuestion();
          }
          console.log(this.answers);
        },
      });
  }

  autoPlayCurrentVoice() {
    this.currentAudio?.pause();

    let audio = this.questionVoices.find(
      (s) => s.question === this.activeQuestion
    );
    if (audio && !audio.autoPlayCompleted) {
      this.playAudio(audio.audio);
    }
  }

  playCurrentVoice() {
    this.currentAudio?.pause();
    let audio = this.questionVoices.find(
      (s) => s.question === this.activeQuestion
    );
    if (audio) {
      this.playAudio(audio.audio);
    }
  }

  toggleVoice(q: number) {
    let audio = this.questionVoices.find((s) => s.question === q);
    if (!audio) {
      return;
    }
    if (this.currentAudio === audio.audio) {
      if (this.currentAudio.paused) {
        this.currentAudio.play();
      } else {
        this.currentAudio.pause();
      }
    } else {
      this.currentAudio?.pause();
      this.playAudio(audio.audio);
    }
  }

  get isPlayingVoice() {
    return !this.currentAudio?.paused;
  }

  playAudio(audio: HTMLAudioElement) {
    this.currentAudio = audio;
    audio.currentTime = 0;
    try {
      audio.play();
    } catch (e) {
      console.error(e);
    }
  }

  loadCurrentAnswer() {
    let a = this.fardamoon.answers.find(
      (s) => s.station === 'job' && s.question === this.activeQuestion
    );
    if (a) {
      this.currentAnswer = a;
    } else {
      this.currentAnswer = {
        answer: '',
        question: this.activeQuestion,
        station: 'job',
      };
    }
  }

  goBack() {
    this.router.navigate(['/fardamoon/job-station']);
  }

  isKarmoon2Completed() {
    return (
      this.karmoon2Progress?.completedAt &&
      this.karmoon2Progress?.completedAt - Date.now() / 1000 > 24 * 3600
    );
  }
}
