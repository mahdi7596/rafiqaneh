import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';

export interface gardnerPercentResult {
  userPercent: number;
  resultExplanation: string;
}

@Component({
  selector: 'app-reyazi',
  templateUrl: './reyazi.component.html',
  styleUrls: ['./reyazi.component.scss'],
})
export class ReyaziComponent implements OnInit {
  questionsForm: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
    //returnUrl: '/fardamoon/gardner/gardner-missions',
    steps: [
      {
        form: {
          formName: 'gardner-reyazi',
          fields: [
            {
              fieldName: 'q1',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم.',
              fieldTitle: 'می توانم به سرعت و آسانی اعداد را در ذهنم حساب کنم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q2',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'در مدرسه از درس هایی چون ریاضیات و علوم لذت می برم.',
              fieldTitle: 'در مدرسه از درس هایی چون ریاضیات و علوم لذت می برم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q3',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label:
                'از بازی های منطقی معما ها وسایر بازی های فکری (از قبیل شطرنج) لذت می برم.',
              fieldTitle:
                'از بازی های منطقی معما ها وسایر بازی های فکری (از قبیل شطرنج) لذت می برم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q4',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label:
                'دوست دارم آزمایش هایی (اگر...آنگاه) ترتیب دهم، (مثلا اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد)؟',
              fieldTitle:
                'دوست دارم آزمایش هایی (اگر...آنگاه) ترتیب دهم، (مثلا اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد)؟',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q5',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.',
              fieldTitle:
                'من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q6',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label:
                'درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.',
              fieldTitle:
                'درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q7',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'باور دارم تقریبا برای هر چیزی یک تفسیر منطقی وجود دارد.',
              fieldTitle:
                'باور دارم تقریبا برای هر چیزی یک تفسیر منطقی وجود دارد.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q8',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label:
                'من می توانم به صورت واضح به مفاهیم غیر ملموس و خیالی فکر کنم.',
              fieldTitle:
                'من می توانم به صورت واضح به مفاهیم غیر ملموس و خیالی فکر کنم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q9',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label:
                'به کشف عیوب منطقی کارهایی که به مردم در خانه و محل کار خود انجام می دهند یا در مورد آنها صحبت می کنند، علاقه دارم.',
              fieldTitle:
                'به کشف عیوب منطقی کارهایی که به مردم در خانه و محل کار خود انجام می دهند یا در مورد آنها صحبت می کنند، علاقه دارم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q10',
              type: 'imageselect',
              options: [
                {
                  title: 'مخالفم ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                },
                {
                  title: '',
                  value: '2',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: '',
                  value: '3',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-6',
                },
                {
                  title: '',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '6',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label:
                'وقتی چیزی به روش خاصی اندازه گیری ، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.',
              fieldTitle:
                'وقتی چیزی به روش خاصی اندازه گیری ، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
          ],
        },
        stepTitle: null,
      },
    ],
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBack() {
    this.router.navigate(['/fardamoon/gardner/gardner-missions']);
  }

  percentResult: gardnerPercentResult = {
    userPercent: 0,
    resultExplanation: `
    توانایی بالای افراد در حل مسائل ریاضی مربوط به این حوزه است باید افراد با هوش منطقی و قدرت محاسبات ذهنی بالایی دارند. افراد با این توانایی، می‌توانند مسائل پیچیده و مشکلات را تجزیه‌وتحلیل کرده و ساختارهای محاسباتی و ریاضی را در کمترل زمان حل کنند. افراد دارای هوش منطقی دوست دارند زندگی را با اعداد، الگوها و روابط ریاضی بسنجند و در حل مباحث ریاضی بسیار قوی هستند.
    `,
  };
}
