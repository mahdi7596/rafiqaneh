import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-karmoon-user-details',
  templateUrl: './karmoon-user-details.component.html',
  styleUrls: ['./karmoon-user-details.component.scss']
})
export class KarmoonUserDetailsComponent implements OnInit {

  userId?: number;

  karmoon2Form: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '',
    returnUrl: '/admin-area/karmoon-user-details',
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
              label: '۱.اولین مسیر حرفه ای ما تست کیفیت قطعات است نظرت نسبت به این ماجرا چیه؟',
              classes: 'mt-4',
              fieldTitle: 'تست کیفیت قطعات',
              validation: { isRequired: false },
            },
            {
              fieldName: 'humanBody',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲. دوست داری که ساختار بدن انسان را مطالعه بکنی و در مورد اون بیشتر بدونی؟',
              classes: 'mt-4',
              fieldTitle: 'ساختار بدن انسان',
              validation: { isRequired: false },
            },
            {
              fieldName: 'music',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳. راستی به نظرت چقدر توانایی داری که یک گروه موسیقی را رهبری بکنی؟              ',
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
              label: '۵.آیا دوست داری جای آقا محمود نمایندگی رستوران های اکبر جوجه رو به افراد مختلف بفروشی؟',
              classes: 'mt-4',
              fieldTitle: 'نمایندگی رستوران',
              validation: { isRequired: false },
            },
            {
              fieldName: 'accounting',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶.به نظرت میتونی توی بخش حسابداری چک های حقوق ماهانه کارمندان رو تنظیم کنی؟',
              classes: 'mt-4',
              fieldTitle: 'بخش حسابداری',
              validation: { isRequired: false },
            },
          ]
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
              label: '۹.بازی کردن رو قطعا باید دوست داشته باشی ،چقدر دوست داری یک بازی رو مدیریت کنی و هدایتگر اون باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'مدیریت بازی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'help',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۰.علاقه مند به انجام کار داوطلبانه در سازمان های مردم نهاد هستی ؟',
              classes: 'mt-4',
              fieldTitle: 'انجام کار داوطلبانه',
              validation: { isRequired: false },
            },
            {
              fieldName: 'sellProduct',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۱.چقدر دوست داری جای خانم عبدی توی فروشگاه کالاهای مختلف بفروشی؟',
              classes: 'mt-4',
              fieldTitle: 'فروشگاه کالاهای مختلف',
              validation: { isRequired: false },
            },
            {
              fieldName: 'listProduct',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۲.به نظر خودت میتونی جای آقای اکبری لیست اموال موجود در یک محل رو تهیه کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'لیست اموال',
              validation: { isRequired: false },
            },
          ]
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
              label: '۱۴.تحقیقات پیرامون گیاهان و موجودات زنده رو به عنوان شغل می‌پسندی؟',
              classes: 'mt-4',
              fieldTitle: 'گیاهان و موجودات زنده',
              validation: { isRequired: false },
            },
            {
              fieldName: 'art',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۵.چقدر دوست داری جای خانم رضایی طراح آثار هنری مجلات باشی؟',
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
              label: '۱۷.فکر می‌کنی میتونی جای خانم و آقای جعفری مدیر اجرایی هتل این سیاره باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'مدیر اجرایی هتل',
              validation: { isRequired: false },
            },
            {
              fieldName: 'financial',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۸.چقدر علاقه به تهیه صورتحساب های مالی مشتریان یک شرکت داری ؟',
              classes: 'mt-4',
              fieldTitle: 'مصورتحساب های مالی مشتریان',
              validation: { isRequired: false },
            },
          ]
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
              label: '۲۰.به نظرت میتونی یک روش درمانی جدید رو توسعه بدی یا ابداع کنی ؟',
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
              label: '۲۲.خیلی خوب میشه بتونیم داخل پارک ها ورزش روزانه داشته باشیم به نظرت تو میتونی این امر رو محقق کنی و مسئول این بخش باشی؟',
              classes: 'mt-4',
              fieldTitle: 'مسئول',
              validation: { isRequired: false },
            },
            {
              fieldName: 'beautySalon',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۳.چقدر خودت رو در اداره یک مرکز و سالن زیبایی ماهر میبینی؟',
              classes: 'mt-4',
              fieldTitle: 'سالن زیبایی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'folders',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۴.دوست داری تو قسمت بایگانی یک اداره از پرونده ها و سوابق کارمندان نگهداری کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'قسمت بایگانی',
              validation: { isRequired: false },
            },
          ]
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
              label: '۲۷.دوست داری جای خالی نویسنده های این سیاره رو پر کنی و کتاب بنویسی ؟',
              classes: 'mt-4',
              fieldTitle: 'کتاب بنویسی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'familyProblem',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۸.چقدر دوست داری به افراد جهت حل مشکلات خانوادگی اونها کمک کنی ؟',
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
              label: '۳۰.فکر می‌کنی توی سازمان آمار و بخش ثبت داده های آماری چقدر میتونی کمک کنی ؟',
              classes: 'mt-4',
              fieldTitle: 'سازمان آمار',
              validation: { isRequired: false },
            },
          ]
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
              label: '۳۱.به نظرت اگر شیر آب یا لوله ای توی خونتون خراب بشه میتونی تعمیرش کنی ؟چقدر به این کار علاقه داری؟',
              classes: 'mt-4',
              fieldTitle: 'به نظرت اگر شیر آب یا لوله ای توی خونتون خراب بشه میتونی تعمیرش کنی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'ocean',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۲.دوست داری به تیم تحقیقاتی این سیاره که در اقیانوس کاراییب کار می‌کنه بپیوندی و در مورد جانوران آبزی تحقیق کنی ؟              ',
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
              label: '۳۴.اگر با مدرسه به اردو بری چقدر دوست داری سرپرستی بچه ها رو به عهده بگیری ؟',
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
              label: '۳۶.به نظرت توانایی تعمیر و راه اندازی یک ماشین حساب رو داری ؟',
              classes: 'mt-4',
              fieldTitle: 'تعمیر و راه اندازی یک ماشین حساب',
              validation: { isRequired: false },
            },
          ]
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
              label: '۳۸.دوست داری تو یک آزمایشگاه زیست شناسی فعالیت داشته باشی ؟',
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
              label: '۴۱.به نظرت توی فروش خانه به عنوان یک املاکی چقدر میتونی موفق باشی؟',
              classes: 'mt-4',
              fieldTitle: 'عنوان یک املاکی',
              validation: { isRequired: false },
            },
            {
              fieldName: 'bankCustomer',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۲. برای یک مشتری چقدر میتونی مدیریت معاملات بانکی رو انجام بدی؟',
              classes: 'mt-4',
              fieldTitle: 'مدیریت معاملات بانکی',
              validation: { isRequired: false },
            },
          ]
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
              label: '۴۳.دوست داری توی کار اجرایی مثل نصب کفپوش در منازل فعال باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'نصب کفپوش در منازل',
              validation: { isRequired: false },
            },
            {
              fieldName: 'mapOcean',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۴.به نظرت میشه از زیر اقیانوس نقشه کشید؟و تو میتونی این کار رو انجام بدی؟',
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
              label: '۴۶.دوست داری به سالمندان برای انجام کارهای روزمره خودشون کمک کنی؟',
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
              label: '۴۸.چقدر دوست داری در جابه جایی و پیگیری پرونده های افراد فعال باشی ؟',
              classes: 'mt-4',
              fieldTitle: 'جایی و پیگیری پرونده',
              validation: { isRequired: false },
            },
            {
              fieldName: 'submit',
              type: 'input',
              inputType: 'hidden',
              value: 'true'
            },
          ]
        },
        stepTitle: 'قسمت 7 سوالات',
      },
    ]
  };

  karmoon3Form: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '',
    returnUrl: '/fardamoon/job-station',
    steps: [
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q1',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در یک مهمانی',
              label: '1.در یک مهمانی:',
              validation: { isRequired: true },
              options: [
                { title: 'با افراد زیادی صحبت میکنید؛ حتی کسانی که خیلی نمیشناسید', value: 'talk' },
                { title: 'فقط با چند نفر که کاملا آشنا هستید صحبت میکنید', value: 'noTalk' },
              ]
            },
            {
              fieldName: 'q2',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '2.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'به شواهد و اطلاعات موجود اهمیت میدید تا فکر و تحلیل ذهنیتون', value: 'seen' },
                { title: 'به فکر و تحلیل ذهنیتون اهمیت میدید تا شواهد و اطلاعات موجود', value: 'notSeen' },
              ]
            },
            {
              fieldName: 'q3',
              type: 'radioselect',
              value: null,
              fieldTitle: 'به نظر شما کدوم وضعیت بدتره',
              label: '3.به نظر شما کدوم وضعیت بدتره:',
              validation: { isRequired: true },
              options: [
                { title: 'بلندپرواز و خیالاتی بودن', value: 'fly' },
                { title: 'درگیر کارهای روتین و کم خطر بودن', value: 'notFly' },
              ]
            },
            {
              fieldName: 'q4',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم بیشتر بر تصمیماتتون اثر میذاره',
              label: '4.کدوم بیشتر بر تصمیماتتون اثر میذاره:',
              validation: { isRequired: true },
              options: [
                { title: 'اصول (اخلاقی و قانونی و ...)', value: 'manner' },
                { title: 'احساسات و هیجانات', value: 'feeling' },
              ]
            },
            {
              fieldName: 'q5',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر با چی متقاعد میشید؟',
              label: '5.بیشتر با چی متقاعد میشید؟',
              validation: { isRequired: true },
              options: [
                { title: 'استدلال منطقی و عقلی', value: 'logic' },
                { title: 'بر انگیخته شدن احساسات ', value: 'badFeeling' },
              ]
            },
            {
              fieldName: 'q6',
              type: 'radioselect',
              value: null,
              fieldTitle: 'ترجیح میدید چطور کار کنید؟',
              label: '6.ترجیح میدید چطور کار کنید؟',
              validation: { isRequired: true },
              options: [
                { title: 'با یک برنامه منظم', value: 'management' },
                { title: 'هر موقع که حسش رو داشتید ', value: 'whenFeeling' },
              ]
            },
            {
              fieldName: 'q7',
              type: 'radioselect',
              value: null,
              fieldTitle: 'چطور انتخاب می کنید؟',
              label: '7.چطور انتخاب می کنید؟ ',
              validation: { isRequired: true },
              options: [
                { title: 'معمولا با دقت و توجه', value: 'attention' },
                { title: 'معمولا سریع و بدون فکر', value: 'fast' },
              ]
            },
            {
              fieldName: 'q8',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در مهمانی ها معمولا',
              label: '8.در مهمانی ها معمولا: ',
              validation: { isRequired: true },
              options: [
                { title: 'دوست دارید تا دیروقت بمانید و احساس انرژی بالایی دارید.', value: 'delay' },
                { title: 'سعی میکنید زودتر بروید و احساس خالی شدن انرژی میکنید.', value: 'early' },
              ]
            },
            {
              fieldName: 'q9',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر به سمت چه افرادی جذب میشید',
              label: '9.بیشتر به سمت چه افرادی جذب میشید:',
              validation: { isRequired: true },
              options: [
                { title: 'افراد دقیق با حواس پنجگانه قوی', value: 'exact' },
                { title: 'افراد با تصور خلاق', value: 'imagination' },
              ]
            },
            {
              fieldName: 'q10',
              type: 'radioselect',
              value: null,
              fieldTitle: 'به کدوم بیشتر علاقمندید',
              label: '10.به کدوم بیشتر علاقمندید:',
              validation: { isRequired: true },
              options: [
                { title: 'چیزی که وجود داره (واقعیت ها)', value: 'exists' },
                { title: 'چیزی که ممکنه (امکان ها)', value: 'possible' },
              ]
            },
          ]
        },
        stepTitle: 'قسمت 1 سوالات',
      },
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q11',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در برداشت از رفتار دیگران چه چیز رو اصل قرار میدید',
              label: '11.در برداشت از رفتار دیگران چه چیز رو اصل قرار میدید:',
              validation: { isRequired: true },
              options: [
                { title: 'قوانین و ضوابط موجود', value: 'rule' },
                { title: 'شرایط و وضعیت حال حاضر', value: 'condition' },
              ]
            },
            {
              fieldName: 'q12',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در برخورد با دیگران معمولا',
              label: '12.در برخورد با دیگران معمولا:',
              validation: { isRequired: true },
              options: [
                { title: 'به کار و وظیفه ای که باید انجام بشه اهمیت میدید', value: 'duty' },
                { title: 'به افراد و احساساتشون اهمیت میدید', value: 'peopleFeeling' },
              ]
            },
            {
              fieldName: 'q13',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '13.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'وقت شناس هستید', value: 'onTime' },
                { title: 'ریلکس و بی عجله هستید', value: 'relax' },
              ]
            },
            {
              fieldName: 'q14',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر از چی اذیت میشید؟',
              label: '14.شما بیشتر از چی اذیت میشید؟',
              validation: { isRequired: true },
              options: [
                { title: 'اینکه کارهای ناتمام زیادی دارید', value: 'task' },
                { title: 'اینکه خیلی از کارها و برنامه هاتون تموم شده', value: 'noTask' },
              ]
            },
            {
              fieldName: 'q15',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در گروه های دوستی معمولا',
              label: '15.در گروه های دوستی معمولا:',
              validation: { isRequired: true },
              options: [
                { title: 'در جریان همۀ اخبار هستید', value: 'news' },
                { title: 'از آخرین نفراتی هستید که از خبرهای تازه باخبر میشن', value: 'noNews' },
              ]
            },
            {
              fieldName: 'q16',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در انجام کارهای عادی روزمره بیشتر',
              label: '16.در انجام کارهای عادی روزمره بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'به روش معمول و مثل بیشتر مردم کار رو انجام میدید', value: 'normal' },
                { title: 'کار رو متفاوت و به سبک خودتون انجام میدید', value: 'unique' },
              ]
            },
            {
              fieldName: 'q17',
              type: 'radioselect',
              value: null,
              fieldTitle: 'به نظرتون نویسندگان بهتره که',
              label: '17.به نظرتون نویسندگان بهتره که:',
              validation: { isRequired: true },
              options: [
                { title: 'منظورشون رو مستقیم بنویسند', value: 'direct' },
                { title: 'از تشبیه و توصیفات ادبی هم استفاده کنند.', value: 'adjective' },
              ]
            },
            {
              fieldName: 'q18',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم براتون جالبتره؟',
              label: '18.کدوم براتون جالبتره؟:',
              validation: { isRequired: true },
              options: [
                { title: 'ثبات فکری', value: 'think' },
                { title: 'ارتباطات صمیمانه انسانی', value: 'humanRelation' },
              ]
            },
            {
              fieldName: 'q19',
              type: 'radioselect',
              value: null,
              fieldTitle: 'با انجام کدوم راحت ترید؟',
              label: '19.با انجام کدوم راحت ترید؟',
              validation: { isRequired: true },
              options: [
                { title: 'قضاوت منطقی', value: 'logicalJudge' },
                { title: 'قضاوت اخلاقی', value: 'mannerJudge' },
              ]
            },
            {
              fieldName: 'q20',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کارهایی رو دوست دارید که',
              label: '20.کارهایی رو دوست دارید که:',
              validation: { isRequired: true },
              options: [
                { title: 'از پیش تعیین شده و مشخص باشند', value: 'beforeKnow' },
                { title: 'از پیش تعیین شده و مشخص نباشند', value: 'beforeDonkKnow' },
              ]
            },
          ]
        },
        stepTitle: 'قسمت 2 سوالات',
      },
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q21',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم صفات به شما نزدیکتره؟',
              label: '21.کدوم صفات به شما نزدیکتره؟',
              validation: { isRequired: true },
              options: [
                { title: 'جدی و مصمم', value: 'strict' },
                { title: 'ریلکس و آسونگیر', value: 'relax' },
              ]
            },
            {
              fieldName: 'q22',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در تماس تلفنی',
              label: '22.در تماس تلفنی:',
              validation: { isRequired: true },
              options: [
                { title: 'کمتر چیزی رو که قبلا گفتید تکرار میکنید', value: 'repeat' },
                { title: 'چیزی که قبلا گفتید رو جمع بندی و تکرار میکنید', value: 'repeatsay' },
              ]
            },
            {
              fieldName: 'q23',
              type: 'radioselect',
              value: null,
              fieldTitle: 'آمار و اطلاعات',
              label: '23.آمار و اطلاعات:',
              validation: { isRequired: true },
              options: [
                { title: 'واضح و مشخص هستند', value: 'clear' },
                { title: 'بیانگر اصول کلی هستند', value: 'osolkoli' },
              ]
            },
            {
              fieldName: 'q24',
              type: 'radioselect',
              value: null,
              fieldTitle: 'افرادی که آینده رو بررسی و تحلیل میکنند',
              label: '24.افرادی که آینده رو بررسی و تحلیل میکنند:',
              validation: { isRequired: true },
              options: [
                { title: 'آزاردهنده هستند', value: 'bodering' },
                { title: 'برایتان جالب هستند', value: 'interesting' },
              ]
            },
            {
              fieldName: 'q25',
              type: 'radioselect',
              value: null,
              fieldTitle: 'اغلب چطور هستید؟',
              label: '25.اغلب چطور هستید؟',
              validation: { isRequired: true },
              options: [
                { title: 'آرام و صبور', value: 'patience' },
                { title: 'همدل و خونگرم', value: 'warmhearted' },
              ]
            },
            {
              fieldName: 'q26',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم بدتره؟',
              label: '26.کدوم بدتره؟',
              validation: { isRequired: true },
              options: [
                { title: 'بی عدالت بودن', value: 'nojudgement' },
                { title: 'بی رحم بودن', value: 'nomercy' },
              ]
            },
            {
              fieldName: 'q27',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما معمولا اجازه میدید اتفاقات چطور پیش بره؟',
              label: '27.شما معمولا اجازه میدید اتفاقات چطور پیش بره؟',
              validation: { isRequired: true },
              options: [
                { title: 'با فکر و تصمیم گیری دقیق', value: 'withthink' },
                { title: 'شانسی و بر حسب اتفاق', value: 'lucky' },
              ]
            },
            {
              fieldName: 'q28',
              type: 'radioselect',
              value: null,
              fieldTitle: 'چه موقعی حس بهتری دارید؟',
              label: '28.چه موقعی حس بهتری دارید؟',
              validation: { isRequired: true },
              options: [
                { title: 'وقتی انتخابتون رو قطعی کردید', value: 'finaldecsicion' },
                { title: 'وقتی گزینه های مختلفی برای بررسی دارید', value: 'differenopitons' },
              ]
            },
            {
              fieldName: 'q29',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در جمع افراد',
              label: '29.در جمع افراد:',
              validation: { isRequired: true },
              options: [
                { title: 'شما مکالمه رو شروع میکنید', value: 'startdiscussion' },
                { title: 'صبر میکنید تا کسی سر صحبت را باز کند.', value: 'waitotherstarttalk' },
              ]
            },
            {
              fieldName: 'q30',
              type: 'radioselect',
              value: null,
              fieldTitle: 'عقل جمعی',
              label: '30.عقل جمعی (چیزی که بیشتر مردم فکر میکنند درسته):',
              validation: { isRequired: true },
              options: [
                { title: 'به ندرت زیر سوال میره', value: 'underquestion' },
                { title: 'در بسیاری از موارد میشه زیر سوالش برد', value: 'alwaysunderquestion' },
              ]
            },
          ]
        },
        stepTitle: 'قسمت 3 سوالات',
      },
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q31',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بچه ها به اندازه کافی',
              label: '31.بچه ها به اندازه کافی:',
              validation: { isRequired: true },
              options: [
                { title: 'فعالیت مفید نمیکنند', value: 'noenoughactivity' },
                { title: 'در دنیای فانتزی ذهنی خود نیستند', value: 'notchildworl' },
              ]
            },
            {
              fieldName: 'q32',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما راحت ترید طبق چه چیزی تصمیم بگیرید؟',
              label: '32.شما راحت ترید طبق چه چیزی تصمیم بگیرید؟',
              validation: { isRequired: true },
              options: [
                { title: 'استانداردها', value: 'standard' },
                { title: 'احساسات', value: 'feelings' },
              ]
            },
            {
              fieldName: 'q33',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '33.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'قاطع هستید', value: 'jeddi' },
                { title: 'ملایم هستید', value: 'molayem' },
              ]
            },
            {
              fieldName: 'q34',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم بیشتر قابل تحسینه',
              label: '34.کدوم بیشتر قابل تحسینه:',
              validation: { isRequired: true },
              options: [
                { title: 'سازماندهی کردن کارها و با نظم پیش بردنشون', value: 'manageworks' },
                { title: 'سازگار شدن با شرایط و پیشبرد کارها', value: 'withcondition' },
              ]
            },
            {
              fieldName: 'q35',
              type: 'radioselect',
              value: null,
              fieldTitle: 'برای کدوم بیشتر ارزش قائلید؟',
              label: '35.برای کدوم بیشتر ارزش قائلید؟',
              validation: { isRequired: true },
              options: [
                { title: 'نامحدود و چندبعدی بودن', value: 'chandbodi' },
                { title: 'گشودگی به ایده ها و افکار تازه', value: 'goshodegiidea' },
              ]
            },
            {
              fieldName: 'q36',
              type: 'radioselect',
              value: null,
              fieldTitle: 'ارتباط با افراد جدید در شرایط تازه',
              label: '36.ارتباط با افراد جدید در شرایط تازه:',
              validation: { isRequired: true },
              options: [
                { title: 'جالبه و بهتون انرژی میده', value: 'interestingenergy' },
                { title: 'ازتون انرژی میگیره ', value: 'decreaseenergy' },
              ]
            },
            {
              fieldName: 'q37',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما معمولا',
              label: '37.شما معمولا:',
              validation: { isRequired: true },
              options: [
                { title: 'آدم عملگرایی هستید', value: 'amalgara' },
                { title: 'آدم رویاپردازی هستید', value: 'rouyapardaz' },
              ]
            },
            {
              fieldName: 'q38',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما معمولا',
              label: '38.شما معمولا:',
              validation: { isRequired: true },
              options: [
                { title: 'میبینید دیگران چه عملکردی دارند', value: 'seewhatpeopledo' },
                { title: 'میبینید دیگران چه فکر میکنند', value: 'knowpeoplethink' },
              ]
            },
            {
              fieldName: 'q39',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم راضی کننده تره؟',
              label: '39.کدوم راضی کننده تره؟',
              validation: { isRequired: true },
              options: [
                { title: 'به طور کامل درباره موضوعی بحث کنید', value: 'discussaboutsubject' },
                { title: 'سر یک موضوع به تفاهم برسید', value: 'acceptdiscuss' },
              ]
            },
            {
              fieldName: 'q40',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم بیشتر شما رو هدایت میکنه؟',
              label: '40.کدوم بیشتر شما رو هدایت میکنه؟',
              validation: { isRequired: true },
              options: [
                { title: 'مغزتون', value: 'yourbrain' },
                { title: 'قلبتون', value: 'yourheart' },
              ]
            },
          ]
        },
        stepTitle: 'قسمت 4 سوالات',
      },
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q41',
              type: 'radioselect',
              value: null,
              fieldTitle: 'با کدوم نوع کار راحت ترید؟',
              label: '41.با کدوم نوع کار راحت ترید؟',
              validation: { isRequired: true },
              options: [
                { title: 'قراردادی بلندمدت', value: 'longcontract' },
                { title: 'پروژه ای کوتاه مدت', value: 'shortproject' },
              ]
            },
            {
              fieldName: 'q42',
              type: 'radioselect',
              value: null,
              fieldTitle: 'تمایل دارید',
              label: '42.تمایل دارید:',
              validation: { isRequired: true },
              options: [
                { title: 'با نظم پیش برید', value: 'discipline' },
                { title: 'ببینید چه پیش میاد', value: 'whatoccurs' },
              ]
            },
            {
              fieldName: 'q43',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم رو ترجیح میدید؟',
              label: '43.کدوم رو ترجیح میدید؟',
              validation: { isRequired: true },
              options: [
                { title: 'دوستان زیاد با تماس کوتاه تر', value: 'manyfriendlesstalk' },
                { title: 'چند دوست محدود با ارتباط بیشتر', value: 'lessfriendmoretalk' },
              ]
            },
            {
              fieldName: 'q44',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر با کدوم پیش میرید؟',
              label: '44.بیشتر با کدوم پیش میرید؟',
              validation: { isRequired: true },
              options: [
                { title: 'آمار و اطلاعات', value: 'staticsanalysis' },
                { title: 'اصول کلی', value: 'overallthings' },
              ]
            },
            {
              fieldName: 'q45',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر به کدوم علاقه دارید؟',
              label: '45. بیشتر به کدوم علاقه دارید؟ ',
              validation: { isRequired: true },
              options: [
                { title: 'کار تولید و پخش', value: 'productiondistribiute' },
                { title: 'کار طراحی و تحقیق', value: 'design' },
              ]
            },
            {
              fieldName: 'q46',
              type: 'radioselect',
              value: null,
              fieldTitle: 'ترجیح میدید چطور ازتون تعریف کنند؟',
              label: '46.ترجیح میدید چطور ازتون تعریف کنند؟',
              validation: { isRequired: true },
              options: [
                { title: 'شخصی بسیار منطقی', value: 'logicalperson' },
                { title: 'شخصی بسیار لطیف و ملایم', value: 'kindperson' },
              ]
            },
            {
              fieldName: 'q47',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در نظر خودتون چه موقع باارزشترید؟',
              label: '47.در نظر خودتون چه موقع باارزشترید؟',
              validation: { isRequired: true },
              options: [
                { title: 'محکم و پایدار باشید', value: 'strongperson' },
                { title: 'وفادار و صادق باشید', value: 'loyalperson' },
              ]
            },
            {
              fieldName: 'q48',
              type: 'radioselect',
              value: null,
              fieldTitle: 'معمولا کدوم رو ترجیح میدید؟',
              label: '48.معمولا کدوم رو ترجیح میدید؟',
              validation: { isRequired: true },
              options: [
                { title: 'نوشته نهایی و غیرقابل تغییر', value: 'finalwrittenthing' },
                { title: 'نوشته مقدماتی و اولیه ', value: 'startwritten' },
              ]
            },
            {
              fieldName: 'q49',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم موقع احساس راحتی بیشتری دارید؟',
              label: '49.کدوم موقع احساس راحتی بیشتری دارید؟',
              validation: { isRequired: true },
              options: [
                { title: 'بعد از تصمیم گیری', value: 'afterdescision' },
                { title: 'قبل از تصمیم گیری ', value: 'beforedescision' },
              ]
            },
            {
              fieldName: 'q50',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما معمولا',
              label: '50.شما معمولا:',
              validation: { isRequired: true },
              options: [
                { title: 'میتونید با یک فرد ناآشنا مکالمه طولانی و خوبی داشته باشید', value: 'nashena' },
                { title: 'در هنگام مواجهه با افراد جدید حرف چندانی برای گفتن ندارید', value: 'newmovajehe' },
              ]
            },
          ]
        },
        stepTitle: 'قسمت 5 سوالات',
      },
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q51',
              type: 'radioselect',
              value: null,
              fieldTitle: 'به کدوم بیشتر اعتماد میکنید؟',
              label: '51.به کدوم بیشتر اعتماد میکنید؟',
              validation: { isRequired: true },
              options: [
                { title: 'تجربه', value: 'expeirience' },
                { title: 'احساس درونی در اون لحظه', value: 'feelinginside' },
              ]
            },
            {
              fieldName: 'q52',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '52.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'اهل عمل هستید', value: 'workjob' },
                { title: 'اهل تفکر هستید', value: 'think' },
              ]
            },
            {
              fieldName: 'q53',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شخصی با کدوم ویژگی برای شما بیشتر قابل تحسینه؟',
              label: '53.شخصی با کدوم ویژگی برای شما بیشتر قابل تحسینه؟',
              validation: { isRequired: true },
              options: [
                { title: 'منطق قوی', value: 'stronglogicalmind' },
                { title: 'احساس قوی', value: 'strongfeeling' },
              ]
            },
            {
              fieldName: 'q54',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر مایلید',
              label: '54.شما بیشتر مایلید:',
              validation: { isRequired: true },
              options: [
                { title: 'منصف و عادل باشید', value: 'monsefadel' },
                { title: 'دلسوز و همدل باشید', value: 'delsozhamdel' },
              ]
            },
            {
              fieldName: 'q55',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر ترجیح میدید',
              label: '55.بیشتر ترجیح میدید:',
              validation: { isRequired: true },
              options: [
                { title: 'مطمئن بشید همه چیز به خوبی برنامه ریزی شده', value: 'hamechizkhob' },
                { title: 'بگذارید چیزها اتفاق بیفتند و طبق جریان پیش برید', value: 'tebghejaryan' },
              ]
            },
            {
              fieldName: 'q56',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در ارتباطات انسانی بیشتر بر این باوریدکه',
              label: '56.در ارتباطات انسانی بیشتر بر این باوریدکه:',
              validation: { isRequired: true },
              options: [
                { title: 'باید بتوان در مورد مسائل مختلف دوباره مذاکره کرد و تصمیم گرفت', value: 'discussaboutdifferentthings' },
                { title: 'مسائل و اتفاقات به صورت تصادفی و بر حسب شرایط پیش میروند', value: 'barhasbesharayet' },
              ]
            },
            {
              fieldName: 'q57',
              type: 'radioselect',
              value: null,
              fieldTitle: 'وقتی تلفن زنگ میزنه',
              label: '57.وقتی تلفن زنگ میزنه:',
              validation: { isRequired: true },
              options: [
                { title: 'سریع میرید تا به تماس جواب بدید', value: 'fastanswere' },
                { title: 'امیدوارید یک نفر دیگه زودتر جواب بده', value: 'hopesomeonecalls' },
              ]
            },
            {
              fieldName: 'q58',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر در کدوم زمینه به خودتون افتخار میکنید؟',
              label: '58.بیشتر در کدوم زمینه به خودتون افتخار میکنید؟',
              validation: { isRequired: true },
              options: [
                { title: 'داشتن درک قوی از واقعیت', value: 'darkghavi' },
                { title: 'داشتن تخیل قوی و زنده', value: 'tahlilghavi' },
              ]
            },
            {
              fieldName: 'q59',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر به سمت کدوم کشیده میشید؟',
              label: '59.شما بیشتر به سمت کدوم کشیده میشید؟ ',
              validation: { isRequired: true },
              options: [
                { title: 'مفاهیم اصلی یک موضوع', value: 'mafahimasli' },
                { title: 'معانی پنهان یک موضوع', value: 'secretmeaning' },
              ]
            },
            {
              fieldName: 'q60',
              type: 'radioselect',
              value: null,
              fieldTitle: 'از نظر شما کدوم خطای بزرگتریه؟',
              label: '60.از نظر شما کدوم خطای بزرگتریه؟',
              validation: { isRequired: true },
              options: [
                { title: 'بیش از حد احساساتی بودن', value: 'somuchehsasi' },
                { title: 'بیش از حد خنثی و خشک بودن', value: 'khonsa' },
              ]
            },
          ]
        },
        stepTitle: 'قسمت 6 سوالات',
      },
      {
        form: {
          formName: 'karmoon3-planet',
          fields: [
            {
              fieldName: 'q61',
              type: 'radioselect',
              value: null,
              fieldTitle: 'خودتون رو کدوم میبینید؟',
              label: '61.خودتون رو کدوم میبینید؟',
              validation: { isRequired: true },
              options: [
                { title: 'سرسخت', value: 'sarsakht' },
                { title: 'دل نازک', value: 'delnazok' },
              ]
            },
            {
              fieldName: 'q62',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم شرایط رو بیشتر میپسندید؟',
              label: '62.کدوم شرایط رو بیشتر میپسندید؟',
              validation: { isRequired: true },
              options: [
                { title: 'برنامه ریزی شده', value: 'barnamerizishode' },
                { title: 'برنامه ریزی نشده', value: 'barnamehrizinashode' },
              ]
            },
            {
              fieldName: 'q63',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '63.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'برنامه زندگی یکنواختی دارید', value: 'yeknavakht' },
                { title: 'برنامه زندگی متنوعی دارید', value: 'motenaveh' },
              ]
            },
            {
              fieldName: 'q64',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '64.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'در ارتباطات راحت و صمیمانه برخورد میکنید', value: 'ertebatatrahatsamimaneh' },
                { title: 'ارتباط با افراد ناآشنا برای شما مشکله', value: 'naashenamoshkeleh' },
              ]
            },
            {
              fieldName: 'q65',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در نوشتن متن بیشتر',
              label: '65.در نوشتن متن بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'مستقیم و واضح منظورتون رو مینویسید', value: 'directopinion' },
                { title: 'از بیان ادبی و غیرمستقیم هم استفاده میکنید', value: 'indirectopinion' },
              ]
            },
            {
              fieldName: 'q66',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم براتون سخت تره؟',
              label: '66.کدوم براتون سخت تره؟',
              validation: { isRequired: true },
              options: [
                { title: 'از نظر احساسی خودتون رو جای دیگران قرار بدید', value: 'ehsasijayedigaran' },
                { title: 'دیگران رو به خوبی به کار بگیرید و مدیریت کنید', value: 'digaranrobekhobi' },
              ]
            },
            {
              fieldName: 'q67',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم رو برای خودتون بیشتر آرزو دارید؟',
              label: '67.کدوم رو برای خودتون بیشتر آرزو دارید؟',
              validation: { isRequired: true },
              options: [
                { title: 'شفافیت در منطق و استدلال', value: 'shafafeyatestedlal' },
                { title: 'قوی بودن در همدلی و محبت کردن', value: 'ghavibodan' },
              ]
            },
            {
              fieldName: 'q68',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم اشتباه بزرگتریه؟',
              label: '68.کدوم اشتباه بزرگتریه؟',
              validation: { isRequired: true },
              options: [
                { title: 'هیچ استانداری برای قضاوت و ارزش گذاری نداشتن', value: 'ghezavat' },
                { title: 'زیادی انتقاد کردن', value: 'enteghadkardan' },
              ]
            },
            {
              fieldName: 'q69',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم رو ترجیح میدید',
              label: '69.کدوم رو ترجیح میدید:',
              validation: { isRequired: true },
              options: [
                { title: 'یک جشن و رویداد برنامه ریزی شده', value: 'jashn' },
                { title: 'یک جشن و رویداد بی برنامه و یهویی', value: 'bebarnamehjashn' },
              ]
            },
            {
              fieldName: 'q70',
              type: 'radioselect',
              value: null,
              fieldTitle: 'تمایل دارید که بیشتر',
              label: '70.تمایل دارید که بیشتر:',
              validation: { isRequired: true },
              options: [
                { title: 'فکر شده و سنجیده رفتار کنید', value: 'fekrshodesanjideh' },
                { title: 'آزادانه و دلبخواه رفتار کنید', value: 'azadaneh' },
              ]
            },
            {
              fieldName: 'submit',
              type: 'input',
              inputType: 'hidden',
              value: 'true'
            },
          ]
        },
        stepTitle: 'قسمت 7 سوالات',
      },
    ]
  };

  karmoon4Form: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '',
    returnUrl: '/fardamoon/job-station',
    steps: [
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q1',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱ من به کتاب و کتابخوانی علاقه دارم.',
              classes: 'mt-4',
              fieldTitle: 'من به کتاب و کتابخوانی علاقه دارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q2',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲ من می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم.',
              classes: 'mt-4',
              fieldTitle: 'من می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q3',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳ وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم.',
              classes: 'mt-4',
              fieldTitle: 'وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q4',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴ من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم.',
              classes: 'mt-4',
              fieldTitle: 'من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q5',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵ افراد اغلب با من مشورت می کنند و در کارهایشان راهنمایی میخواهند.',
              classes: 'mt-4',
              fieldTitle: 'افراد اغلب با من مشورت می کنند و در کارهایشان راهنمایی میخواهند',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q6',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶ من معمولاً زمانی را در تنهایی صرف تفکّر، مراقبه و اندیشیدن در مورد سؤالات مهم زندگی می کنم.',
              classes: 'mt-4',
              fieldTitle: 'من معمولاً زمانی را در تنهایی صرف تفکّر، مراقبه و اندیشیدن در مورد سؤالات مهم زندگی می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q7',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷ من از صدای دلنشینی برای خواندن و سخنوری برخوردارم.',
              classes: 'mt-4',
              fieldTitle: 'من از صدای دلنشینی برای خواندن و سخنوری برخوردارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q8',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۸ من همه ی انواع حیوانات را دوست دارم.',
              classes: 'mt-4',
              fieldTitle: 'من همه ی انواع حیوانات را دوست دارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q9',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۹ قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم.',
              classes: 'mt-4',
              fieldTitle: 'قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q10',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۰ در مدرسه از درس هایی چون ریاضیات و علوم لذّت بسیاری می برم.',
              classes: 'mt-4',
              fieldTitle: '۱۰ در مدرسه از درس هایی چون ریاضیات و علوم لذّت بسیاری می برم',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت ۱ سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q11',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۱ من نسبت به رنگ ها علاقمندم.',
              classes: 'mt-4',
              fieldTitle: 'من نسبت به رنگ ها علاقمندم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q12',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۲ خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم.',
              classes: 'mt-4',
              fieldTitle: 'خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q13',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۳ ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.',
              classes: 'mt-4',
              fieldTitle: 'ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q14',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۴ در جلساتی که به رشد و آگاهی های فردی من افزوده می شود شرکت می کنم.',
              classes: 'mt-4',
              fieldTitle: 'در جلساتی که به رشد و آگاهی های فردی من افزوده می شود شرکت می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q15',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۵ آهنگ های ناموزون و سازهای خارج از ریتم و ملودی را تشخیص می دهم.',
              classes: 'mt-4',
              fieldTitle: 'آهنگ های ناموزون و سازهای خارج از ریتم و ملودی را تشخیص می دهم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q16',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۶ دوست دارم چیزهایی را سازمان بندی یا مرتب کنم.',
              classes: 'mt-4',
              fieldTitle: 'دوست دارم چیزهایی را سازمان بندی یا مرتب کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q17',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۷ گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد.',
              classes: 'mt-4',
              fieldTitle: 'گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q18',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۸ من از بازی های منطقی، معماها و سایر بازی های فکری (از قبیل شطرنج) لذّت می برم.',
              classes: 'mt-4',
              fieldTitle: 'من از بازی های منطقی، معماها و سایر بازی های فکری (از قبیل شطرنج) لذّت می برم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q19',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۱۹ اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلم برداری استفاده می کنم.',
              classes: 'mt-4',
              fieldTitle: 'اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلم برداری استفاده می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q20',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۰ به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری، مدل سازی و حکّاکی  و امثال اینها علاقمندم.',
              classes: 'mt-4',
              fieldTitle: 'به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری، مدل سازی و حکّاکی  و امثال اینها علاقمندم',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت 2 سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q21',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۱ وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.',
              classes: 'mt-4',
              fieldTitle: 'وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q22',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۲ قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم.',
              classes: 'mt-4',
              fieldTitle: 'قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q23',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۳ اغلب به نواها و موسیقی از رادیو یا ضبط صوت یا سی دی و غیره گوش می دهم.',
              classes: 'mt-4',
              fieldTitle: 'اغلب به نواها و موسیقی از رادیو یا ضبط صوت یا سی دی و غیره گوش می دهم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q24',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۴ من از طبیعت لذّت می برم.',
              classes: 'mt-4',
              fieldTitle: 'من از طبیعت لذّت می برم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q25',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۵ من از بازی با کلمات مانند جدول کلمات متقاطع، جملات درهم ریخته یا اسم رمزها لذّت می برم.',
              classes: 'mt-4',
              fieldTitle: 'من از بازی با کلمات مانند جدول کلمات متقاطع، جملات درهم ریخته یا اسم رمزها لذّت می برم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q26',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۶ دوست دارم آزمایش هایی همچون (اگر…آنگاه) ترتیب دهم، (مثلاً اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد؟).',
              classes: 'mt-4',
              fieldTitle: 'دوست دارم آزمایش هایی همچون (اگر…آنگاه) ترتیب دهم، (مثلاً اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد؟)',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q27',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۷ من از معماهای دیداری مانند پازل ها و تصاویر سه بعدی لذّت می برم.',
              classes: 'mt-4',
              fieldTitle: 'من از معماهای دیداری مانند پازل ها و تصاویر سه بعدی لذّت می برم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q28',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۸ بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی(از قبیل پیاده روی، دو، شنا و…) هستم.',
              classes: 'mt-4',
              fieldTitle: 'بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی(از قبیل پیاده روی، دو، شنا و…) هستم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q29',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۲۹ من حداقل با سه نفر، دوست نزدیک و صمیمی هستم.',
              classes: 'mt-4',
              fieldTitle: 'من حداقل با سه نفر، دوست نزدیک و صمیمی هستم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q30',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۰ یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می دهم.',
              classes: 'mt-4',
              fieldTitle: 'یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می دهم',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت 3 سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q31',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۱ ساز خاصی را میتوانم  بنوازم.',
              classes: 'mt-4',
              fieldTitle: 'ساز خاصی را میتوانم  بنوازم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q32',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۲ من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر، کارت های ورزشی … را جمع می کنم.',
              classes: 'mt-4',
              fieldTitle: 'من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر، کارت های ورزشی … را جمع می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q33',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۳ من اغراق های زبانی، ایهام، آهنگ های بی معنی و کلمات دوپهلو را دوست دارم.',
              classes: 'mt-4',
              fieldTitle: 'من اغراق های زبانی، ایهام، آهنگ های بی معنی و کلمات دوپهلو را دوست دارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q34',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۴ من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.',
              classes: 'mt-4',
              fieldTitle: 'من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q35',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۵ من در خوابم رؤیاهای روشنی را می بینم.',
              classes: 'mt-4',
              fieldTitle: 'من در خوابم رؤیاهای روشنی را می بینم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q36',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۶ اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم.',
              classes: 'mt-4',
              fieldTitle: 'اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q37',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۷ من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.',
              classes: 'mt-4',
              fieldTitle: 'من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q38',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۸ اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.',
              classes: 'mt-4',
              fieldTitle: 'اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q39',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۳۹ زندگی من بدون موسیقی و نوا بسیار یکنواخت و بی هیجان خواهد بود.',
              classes: 'mt-4',
              fieldTitle: 'زندگی من بدون موسیقی و نوا بسیار یکنواخت و بی هیجان خواهد بود',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q40',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۰ من مرتباً گزارش تغییرات آب و هوا را کنترل می کنم.',
              classes: 'mt-4',
              fieldTitle: 'من مرتباً گزارش تغییرات آب و هوا را کنترل می کنم',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت 4 سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q41',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۱ دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستن.',
              classes: 'mt-4',
              fieldTitle: 'دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستن',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q42',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۲ درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.',
              classes: 'mt-4',
              fieldTitle: 'درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q43',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۳ معمولاً قادرم مسیر را در یک محله ی ناآشنا پیدا کنم.',
              classes: 'mt-4',
              fieldTitle: 'معمولاً قادرم مسیر را در یک محله ی ناآشنا پیدا کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q44',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۴ هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها و زبان بدن (مانند تغییر چهره) استفاده کنم.',
              classes: 'mt-4',
              fieldTitle: 'هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها و زبان بدن (مانند تغییر چهره) استفاده کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q45',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۵ از آموزش دادن دانسته هایم به افراد دیگر لذّت می برم.',
              classes: 'mt-4',
              fieldTitle: 'از آموزش دادن دانسته هایم به افراد دیگر لذّت می برم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q46',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۶ من از طریق عکس العمل دیگران، دیدگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.',
              classes: 'mt-4',
              fieldTitle: 'من از طریق عکس العمل دیگران، دیدگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q47',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۷ اغلب در طی روز مدام یک موسیقی و نوا در ذهنم اجرا و پخش می شود.',
              classes: 'mt-4',
              fieldTitle: '۴۷ اغلب در طی روز مدام یک موسیقی و نوا در ذهنم اجرا و پخش می شود',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q48',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۸ تفاوت های موجود میان انواع درختان، سنگ ها، پرندگان یا سایر گیاهان و جانوران را به خوبی بیان می کنم.',
              classes: 'mt-4',
              fieldTitle: 'تفاوت های موجود میان انواع درختان،',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q49',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۴۹ وقتی در ماشین هستم دوست دارم علائم و تابلوهای تبلیغاتی را بخوانم و به آن ها بیشتر از مناظر اطراف توجه کنم.',
              classes: 'mt-4',
              fieldTitle: 'تبلیغاتی را بخوانم و به آن ها ',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q50',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۰ باور دارم تقریباً برای هر چیزی یک تفسیر منطقی وجود دارد.',
              classes: 'mt-4',
              fieldTitle: 'باور دارم تقریباً برای هر چیزی یک تفسیر منطقی وجود دارد. ',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت 5 سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q51',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۱ من طراحی را دوست دارم و من اغلب طراحی می کنم.',
              classes: 'mt-4',
              fieldTitle: '۵۱ من طراحی را دوست دارم و من اغلب طراحی می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q52',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۲ من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آن ها یاد بگیرم.',
              classes: 'mt-4',
              fieldTitle: 'من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آن ها یاد بگیرم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q53',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۳ فکر می کنم قدرت رهبری خوبی دارم و اطرافیان و دوستانم نیز این موضوع را قبول دارند.',
              classes: 'mt-4',
              fieldTitle: 'فکر می کنم قدرت رهبری خوبی دارم و اطرافیان و دوستانم نیز این موضوع را قبول دارند',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q54',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۴ من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم..',
              classes: 'mt-4',
              fieldTitle: 'من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q55',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۵ با استفاده از یک ابزار موسیقی ساده به راحتی می توانم اوقات فراغت خود را سپری کنم',
              classes: 'mt-4',
              fieldTitle: 'با استفاده از یک ابزار موسیقی ساده به راحتی می توانم اوقات فراغت خود را سپری کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q56',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۶ من از ماهیگیری، باغبانی، کاشتن گیاهان و آشپزی لذّت می برم',
              classes: 'mt-4',
              fieldTitle: '۵۶ من از ماهیگیری، باغبانی، کاشتن گیاهان و آشپزی لذّت می برم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q57',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۷ اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلاً خوانده یا شنیده ام.',
              classes: 'mt-4',
              fieldTitle: '۵۷ اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلاً خوانده یا شنیده ام.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q58',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۸ من می توانم به صورت واضح به مفاهیم غیرملموس، انتزاعی و خیالی فکر کنم.',
              classes: 'mt-4',
              fieldTitle: 'من می توانم به صورت واضح به مفاهیم غیرملموس، انتزاعی و خیالی فکر کنم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q59',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۵۹ جغرافیا از ریاضی برایم آسان تر است.',
              classes: 'mt-4',
              fieldTitle: 'جغرافیا از ریاضی برایم آسان تر است.',
              validation: { isRequired: false },
            },
            {
              fieldName: '60',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۰ من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پرهیجان) لذّت بسیار می برم.',
              classes: 'mt-4',
              fieldTitle: 'من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پرهیجان) لذّت بسیار می برم.',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت 6 سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q61',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۱ من در میان جمع احساس راحتی می کنم.',
              classes: 'mt-4',
              fieldTitle: '۶۱ من در میان جمع احساس راحتی می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q62',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۲ من با اراده و مستقل هستم.',
              classes: 'mt-4',
              fieldTitle: '۶۲ من با اراده و مستقل هستم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q63',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۳ آهنگ های بسیاری از آوازها یا قطعات موسیقی را شنیده و بلدم.',
              classes: 'mt-4',
              fieldTitle: '۶۳ آهنگ های بسیاری از آوازها یا قطعات موسیقی را شنیده و بلدم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q64',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۴ از مشاهده رویدادهای طبیعی( مانند ستاره ها، ماه، جزر و مد) لذّت برده و دوست دارم جزئیات اطّلاعات درباره ی آن ها را به دست آورم.',
              classes: 'mt-4',
              fieldTitle: 'از مشاهده رویدادهای طبیعی( مانند ستاره ها، ماه، جزر و مد) لذّت برده و دوست دارم جزئیات اطّلاعات درباره ی آن ها را به دست آورم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q65',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۵ اغلب اطرافیانم معنی کلمات مختلف را از من می پرسند.',
              classes: 'mt-4',
              fieldTitle: 'اغلب اطرافیانم معنی کلمات مختلف را از من می پرسند',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q66',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۶ به کشف عیب منطقی کارهایی که مردم در خانه و محل کار خود انجام می دهند یا در مورد آن ها صحبت می کنند، علاقه دارم..',
              classes: 'mt-4',
              fieldTitle: '۶۶ به کشف عیب منطقی کارهایی که مردم در خانه و محل کار خود انجام می دهند یا در مورد آن ها صحبت می کنند، علاقه دارم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q67',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۷ می توانم تصور کنم (مثلا از نگاه یک پرنده)، اجسام از بالا چگونه به نظر می رسند.',
              classes: 'mt-4',
              fieldTitle: '۶۷ می توانم تصور کنم (مثلا از نگاه یک پرنده)، اجسام از بالا چگونه به نظر می رسند',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q68',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۸ من از نظر جسمی و اندازه اندام های بدنی کاملاً متناسبم.',
              classes: 'mt-4',
              fieldTitle: '۶۸ من از نظر جسمی و اندازه اندام های بدنی کاملاً متناسبم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q69',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۶۹ من در فعالیت های مدرسه ، مسجد،هیات، همسایگان و فعالیت های اجتماعی شرکت می کنم.',
              classes: 'mt-4',
              fieldTitle: 'من در فعالیت های مدرسه ، مسجد،هیات، همسایگان و فعالیت های اجتماعی شرکت می کنم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q70',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۰ من یک دفتر خاطرات روزانه دارم تا اتّفاقات زندگی ام را یادداشت کنم.',
              classes: 'mt-4',
              fieldTitle: '۷۰ من یک دفتر خاطرات روزانه دارم تا اتّفاقات زندگی ام را یادداشت کنم.',
              validation: { isRequired: false },
            },
          ]
        },
        stepTitle: 'قسمت 7 سوالات',
      },
      {
        form: {
          formName: 'karmoon4-planet',
          fields: [
            {
              fieldName: 'q71',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۱ اگر یک قطعه موسیقی را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم.',
              classes: 'mt-4',
              fieldTitle: 'اگر یک قطعه موسیقی را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q72',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۲ دوست دارم کتاب ها یا مجلاّتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود.',
              classes: 'mt-4',
              fieldTitle: '۷۲ دوست دارم کتاب ها یا مجلاّتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q73',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۳ اخیراً چیزی نوشته ام که به آن افتخار می کنم.',
              classes: 'mt-4',
              fieldTitle: '۷۳ اخیراً چیزی نوشته ام که به آن افتخار می کنم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q74',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۴ وقتی چیزی به روش خاصی اندازه گیری، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.',
              classes: 'mt-4',
              fieldTitle: '۷۴ وقتی چیزی به روش خاصی اندازه گیری، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q75',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۵ من ترجیح می دهم کتاب، مجلاّت و روزنامه هایی را بخوانم که تصاویر زیادی دارند.',
              classes: 'mt-4',
              fieldTitle: '۷۵ من ترجیح می دهم کتاب، مجلاّت و روزنامه هایی را بخوانم که تصاویر زیادی دارند.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q76',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۶ برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای اینکه درباره آن بخوانم یا فیلمی را تماشا کنم.',
              classes: 'mt-4',
              fieldTitle: '۷۶ برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای اینکه درباره آن بخوانم یا فیلمی را تماشا کنم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q77',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۷ من ترجیح می دهم شب تعطیل را در یک میهمانی با خانواده بگذرانم تا تنها در خانه بمانم.',
              classes: 'mt-4',
              fieldTitle: '۷۷ من ترجیح می دهم شب تعطیل را در یک میهمانی با خانواده بگذرانم تا تنها در خانه بمانم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q78',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۸ من ترجیح می دهم یک شغل مستقل داشته باشم و به روی پای خودم بایستم تا برای دیگران کار کنم..',
              classes: 'mt-4',
              fieldTitle: '۷۸ من ترجیح می دهم یک شغل مستقل داشته باشم و به روی پای خودم بایستم تا برای دیگران کار کنم.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q79',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۷۹ من اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم.',
              classes: 'mt-4',
              fieldTitle: '۷۹ من اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم',
              validation: { isRequired: false },
            },
            {
              fieldName: 'q80',
              type: 'slider',
              sliderOption: { min: 0, max: 5, step: 1 },
              value: null,
              label: '۸۰ در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد و در از سر صدا.',
              classes: 'mt-4',
              fieldTitle: '۸۰ در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد و در از سر صدا.',
              validation: { isRequired: false },
            },
            {
              fieldName: 'submit',
              type: 'input',
              inputType: 'hidden',
              value: 'true'
            },
          ]
        },
        stepTitle: 'قسمت 7 سوالات',
      },
    ]
  };
  karmoonDetails: any;

  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService,
    private router: Router,
    private activeRoute: ActivatedRoute) { 
      this.activeRoute.params.subscribe(params => {
        this.userId = params['userId'];
        this.loadUserData();
      })
    }

  ngOnInit(): void {

  }

  loadUserData() {
    if (!this.userId) {
      return;
    }
    this.karmoon3Form.returnUrl  = 
      this.karmoon3Form.returnUrl = this.karmoon4Form.returnUrl = '/admin-area/karmoon-user-details/' + this.userId;
    
    this.spinner.show();
    this.http.get(environment.apiUrl + '/api/admin/karmoon/userDetails?userId=' + this.userId)
    .subscribe({
      next: (s: any) => {
        this.spinner.hide();
        this.karmoonDetails = s;
      },
      error: () => this.spinner.hide()
    });
  }

}
