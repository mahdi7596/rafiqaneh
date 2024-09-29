import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FardamoonService } from 'src/app/fardamoon-event/services/fardamoon.service';
import { KarmoonService } from 'src/app/fardamoon/services/karmoon.service';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';

@Component({
  selector: 'app-karmoon3',
  templateUrl: './karmoon3.component.html',
  styleUrls: ['./karmoon3.component.scss'],
})
export class Karmoon3Component implements OnInit {
  startGame: boolean = true;
  remainedTime: number = 0;
  timeAllowed = false;

  constructor(
    private notifications: NotificationService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fardamoon: FardamoonService,
    private karmoon: KarmoonService
  ) {
    this.spinner.show();
    this.karmoon.getKarmoonProgress().subscribe({
      next: (s) => {
        this.spinner.hide();
        if (s.karmoon3?.completedAt || !karmoon.isTimeAllowed(s.karmoon2)) {
          this.router.navigateByUrl('/fardamoon/job-station');
        } else {
          this.timeAllowed = true;
        }
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }

  ngOnInit(): void {}

  karmoon3SecondYearChallenge: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
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
                {
                  title:
                    'با افراد زیادی صحبت میکنید؛ حتی کسانی که خیلی نمیشناسید',
                  value: 'talk',
                },
                {
                  title: 'فقط با چند نفر که کاملا آشنا هستید صحبت میکنید',
                  value: 'noTalk',
                },
              ],
            },
            {
              fieldName: 'q2',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '2.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                {
                  title:
                    'به شواهد و اطلاعات موجود اهمیت میدید تا فکر و تحلیل ذهنیتون',
                  value: 'seen',
                },
                {
                  title:
                    'به فکر و تحلیل ذهنیتون اهمیت میدید تا شواهد و اطلاعات موجود',
                  value: 'notSeen',
                },
              ],
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
              ],
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
              ],
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
              ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q8',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در مهمانی ها معمولا',
              label: '8.در مهمانی ها معمولا: ',
              validation: { isRequired: true },
              options: [
                {
                  title:
                    'دوست دارید تا دیروقت بمانید و احساس انرژی بالایی دارید.',
                  value: 'delay',
                },
                {
                  title:
                    'سعی میکنید زودتر بروید و احساس خالی شدن انرژی میکنید.',
                  value: 'early',
                },
              ],
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
              ],
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
              ],
            },
          ],
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
              ],
            },
            {
              fieldName: 'q12',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در برخورد با دیگران معمولا',
              label: '12.در برخورد با دیگران معمولا:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'به کار و وظیفه ای که باید انجام بشه اهمیت میدید',
                  value: 'duty',
                },
                {
                  title: 'به افراد و احساساتشون اهمیت میدید',
                  value: 'peopleFeeling',
                },
              ],
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
              ],
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
                {
                  title: 'اینکه خیلی از کارها و برنامه هاتون تموم شده',
                  value: 'noTask',
                },
              ],
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
                {
                  title: 'از آخرین نفراتی هستید که از خبرهای تازه باخبر میشن',
                  value: 'noNews',
                },
              ],
            },
            {
              fieldName: 'q16',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در انجام کارهای عادی روزمره بیشتر',
              label: '16.در انجام کارهای عادی روزمره بیشتر:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'به روش معمول و مثل بیشتر مردم کار رو انجام میدید',
                  value: 'normal',
                },
                {
                  title: 'کار رو متفاوت و به سبک خودتون انجام میدید',
                  value: 'unique',
                },
              ],
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
                {
                  title: 'از تشبیه و توصیفات ادبی هم استفاده کنند.',
                  value: 'adjective',
                },
              ],
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
              ],
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
              ],
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
                {
                  title: 'از پیش تعیین شده و مشخص نباشند',
                  value: 'beforeDonkKnow',
                },
              ],
            },
          ],
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
              ],
            },
            {
              fieldName: 'q22',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در تماس تلفنی',
              label: '22.در تماس تلفنی:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'کمتر چیزی رو که قبلا گفتید تکرار میکنید',
                  value: 'repeat',
                },
                {
                  title: 'چیزی که قبلا گفتید رو جمع بندی و تکرار میکنید',
                  value: 'repeatsay',
                },
              ],
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
              ],
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
              ],
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
              ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q28',
              type: 'radioselect',
              value: null,
              fieldTitle: 'چه موقعی حس بهتری دارید؟',
              label: '28.چه موقعی حس بهتری دارید؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'وقتی انتخابتون رو قطعی کردید',
                  value: 'finaldecsicion',
                },
                {
                  title: 'وقتی گزینه های مختلفی برای بررسی دارید',
                  value: 'differenopitons',
                },
              ],
            },
            {
              fieldName: 'q29',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در جمع افراد',
              label: '29.در جمع افراد:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'شما مکالمه رو شروع میکنید',
                  value: 'startdiscussion',
                },
                {
                  title: 'صبر میکنید تا کسی سر صحبت را باز کند.',
                  value: 'waitotherstarttalk',
                },
              ],
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
                {
                  title: 'در بسیاری از موارد میشه زیر سوالش برد',
                  value: 'alwaysunderquestion',
                },
              ],
            },
          ],
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
                {
                  title: 'در دنیای فانتزی ذهنی خود نیستند',
                  value: 'notchildworl',
                },
              ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q34',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم بیشتر قابل تحسینه',
              label: '34.کدوم بیشتر قابل تحسینه:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'سازماندهی کردن کارها و با نظم پیش بردنشون',
                  value: 'manageworks',
                },
                {
                  title: 'سازگار شدن با شرایط و پیشبرد کارها',
                  value: 'withcondition',
                },
              ],
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
                {
                  title: 'گشودگی به ایده ها و افکار تازه',
                  value: 'goshodegiidea',
                },
              ],
            },
            {
              fieldName: 'q36',
              type: 'radioselect',
              value: null,
              fieldTitle: 'ارتباط با افراد جدید در شرایط تازه',
              label: '36.ارتباط با افراد جدید در شرایط تازه:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'جالبه و بهتون انرژی میده',
                  value: 'interestingenergy',
                },
                { title: 'ازتون انرژی میگیره ', value: 'decreaseenergy' },
              ],
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
              ],
            },
            {
              fieldName: 'q38',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما معمولا',
              label: '38.شما معمولا:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'میبینید دیگران چه عملکردی دارند',
                  value: 'seewhatpeopledo',
                },
                {
                  title: 'میبینید دیگران چه فکر میکنند',
                  value: 'knowpeoplethink',
                },
              ],
            },
            {
              fieldName: 'q39',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم راضی کننده تره؟',
              label: '39.کدوم راضی کننده تره؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'به طور کامل درباره موضوعی بحث کنید',
                  value: 'discussaboutsubject',
                },
                { title: 'سر یک موضوع به تفاهم برسید', value: 'acceptdiscuss' },
              ],
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
              ],
            },
          ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q43',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم رو ترجیح میدید؟',
              label: '43.کدوم رو ترجیح میدید؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'دوستان زیاد با تماس کوتاه تر',
                  value: 'manyfriendlesstalk',
                },
                {
                  title: 'چند دوست محدود با ارتباط بیشتر',
                  value: 'lessfriendmoretalk',
                },
              ],
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
              ],
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
              ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q48',
              type: 'radioselect',
              value: null,
              fieldTitle: 'معمولا کدوم رو ترجیح میدید؟',
              label: '48.معمولا کدوم رو ترجیح میدید؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'نوشته نهایی و غیرقابل تغییر',
                  value: 'finalwrittenthing',
                },
                { title: 'نوشته مقدماتی و اولیه ', value: 'startwritten' },
              ],
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
              ],
            },
            {
              fieldName: 'q50',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما معمولا',
              label: '50.شما معمولا:',
              validation: { isRequired: true },
              options: [
                {
                  title:
                    'میتونید با یک فرد ناآشنا مکالمه طولانی و خوبی داشته باشید',
                  value: 'nashena',
                },
                {
                  title:
                    'در هنگام مواجهه با افراد جدید حرف چندانی برای گفتن ندارید',
                  value: 'newmovajehe',
                },
              ],
            },
          ],
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
              ],
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
              ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q55',
              type: 'radioselect',
              value: null,
              fieldTitle: 'بیشتر ترجیح میدید',
              label: '55.بیشتر ترجیح میدید:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'مطمئن بشید همه چیز به خوبی برنامه ریزی شده',
                  value: 'hamechizkhob',
                },
                {
                  title: 'بگذارید چیزها اتفاق بیفتند و طبق جریان پیش برید',
                  value: 'tebghejaryan',
                },
              ],
            },
            {
              fieldName: 'q56',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در ارتباطات انسانی بیشتر بر این باوریدکه',
              label: '56.در ارتباطات انسانی بیشتر بر این باوریدکه:',
              validation: { isRequired: true },
              options: [
                {
                  title:
                    'باید بتوان در مورد مسائل مختلف دوباره مذاکره کرد و تصمیم گرفت',
                  value: 'discussaboutdifferentthings',
                },
                {
                  title:
                    'مسائل و اتفاقات به صورت تصادفی و بر حسب شرایط پیش میروند',
                  value: 'barhasbesharayet',
                },
              ],
            },
            {
              fieldName: 'q57',
              type: 'radioselect',
              value: null,
              fieldTitle: 'وقتی تلفن زنگ میزنه',
              label: '57.وقتی تلفن زنگ میزنه:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'سریع میرید تا به تماس جواب بدید',
                  value: 'fastanswere',
                },
                {
                  title: 'امیدوارید یک نفر دیگه زودتر جواب بده',
                  value: 'hopesomeonecalls',
                },
              ],
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
              ],
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
              ],
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
              ],
            },
          ],
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
              ],
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
              ],
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
              ],
            },
            {
              fieldName: 'q64',
              type: 'radioselect',
              value: null,
              fieldTitle: 'شما بیشتر',
              label: '64.شما بیشتر:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'در ارتباطات راحت و صمیمانه برخورد میکنید',
                  value: 'ertebatatrahatsamimaneh',
                },
                {
                  title: 'ارتباط با افراد ناآشنا برای شما مشکله',
                  value: 'naashenamoshkeleh',
                },
              ],
            },
            {
              fieldName: 'q65',
              type: 'radioselect',
              value: null,
              fieldTitle: 'در نوشتن متن بیشتر',
              label: '65.در نوشتن متن بیشتر:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'مستقیم و واضح منظورتون رو مینویسید',
                  value: 'directopinion',
                },
                {
                  title: 'از بیان ادبی و غیرمستقیم هم استفاده میکنید',
                  value: 'indirectopinion',
                },
              ],
            },
            {
              fieldName: 'q66',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم براتون سخت تره؟',
              label: '66.کدوم براتون سخت تره؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'از نظر احساسی خودتون رو جای دیگران قرار بدید',
                  value: 'ehsasijayedigaran',
                },
                {
                  title: 'دیگران رو به خوبی به کار بگیرید و مدیریت کنید',
                  value: 'digaranrobekhobi',
                },
              ],
            },
            {
              fieldName: 'q67',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم رو برای خودتون بیشتر آرزو دارید؟',
              label: '67.کدوم رو برای خودتون بیشتر آرزو دارید؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'شفافیت در منطق و استدلال',
                  value: 'shafafeyatestedlal',
                },
                { title: 'قوی بودن در همدلی و محبت کردن', value: 'ghavibodan' },
              ],
            },
            {
              fieldName: 'q68',
              type: 'radioselect',
              value: null,
              fieldTitle: 'کدوم اشتباه بزرگتریه؟',
              label: '68.کدوم اشتباه بزرگتریه؟',
              validation: { isRequired: true },
              options: [
                {
                  title: 'هیچ استانداری برای قضاوت و ارزش گذاری نداشتن',
                  value: 'ghezavat',
                },
                { title: 'زیادی انتقاد کردن', value: 'enteghadkardan' },
              ],
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
                {
                  title: 'یک جشن و رویداد بی برنامه و یهویی',
                  value: 'bebarnamehjashn',
                },
              ],
            },
            {
              fieldName: 'q70',
              type: 'radioselect',
              value: null,
              fieldTitle: 'تمایل دارید که بیشتر',
              label: '70.تمایل دارید که بیشتر:',
              validation: { isRequired: true },
              options: [
                {
                  title: 'فکر شده و سنجیده رفتار کنید',
                  value: 'fekrshodesanjideh',
                },
                { title: 'آزادانه و دلبخواه رفتار کنید', value: 'azadaneh' },
              ],
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

  stepsCompleted(event: any) {
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

  onStartGame() {
    this.startGame = true;
  }

  goBack() {
    this.router.navigate(['/fardamoon/job-station']);
  }
}
