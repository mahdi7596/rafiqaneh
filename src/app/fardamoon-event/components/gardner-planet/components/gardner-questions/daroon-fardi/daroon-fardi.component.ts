import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { gardnerPercentResult } from '../reyazi/reyazi.component';

@Component({
  selector: 'app-daroon-fardi',
  templateUrl: './daroon-fardi.component.html',
  styleUrls: ['./daroon-fardi.component.scss'],
})
export class DaroonFardiComponent implements OnInit {
  questionsForm: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
    //returnUrl: '/fardamoon/gardner/gardner-missions',
    steps: [
      {
        form: {
          formName: 'gardner-daroon-fardi',
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
              label:
                'من معمولا زمانی را در تنهایی صرف تفکر، مراقبه و اندیشیدن در مورد سوالات مهم زندگی می کنم.',
              fieldTitle:
                'من معمولا زمانی را در تنهایی صرف تفکر، مراقبه و اندیشیدن در مورد سوالات مهم زندگی می کنم.',
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
              label:
                'در جلساتی که با رشد و آگاهیهای فردی افزوده می شود شرکت میکنم.',
              fieldTitle:
                'در جلساتی که با رشد و آگاهیهای فردی افزوده می شود شرکت میکنم.',
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
                'قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم.',
              fieldTitle:
                'قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم.',
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
                'یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام میدهم.',
              fieldTitle:
                'یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام میدهم.',
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
              label: 'اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.',
              fieldTitle:
                'اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.',
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
                'من از طریق عکس العمل دیگران، دیگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.',
              fieldTitle:
                'من از طریق عکس العمل دیگران، دیگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.',
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
              label:
                'من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.',
              fieldTitle:
                'من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.',
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
              label: 'من با اراده و مستقل هستم.',
              fieldTitle: 'من با اراده و مستقل هستم.',
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
                'من یک دفتر خاطرات روزانه دارم تا اتفاقات زندگی ام را یادداشت کنم.',
              fieldTitle:
                'من یک دفتر خاطرات روزانه دارم تا اتفاقات زندگی ام را یادداشت کنم.',
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
                'من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم.',
              fieldTitle:
                'من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم.',
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
    افراد با هوش درون‌فردی با عواطف و احساسات خود ارتباط نزدیکی داشته و درونگرا هستند و از رؤیاپردازی و فکر کردن لذت می‌برند. این افراد آرام و بی‌صدا هستند و در اکثر مواقع از کارهای گروهی لذت نمی‌برند. زمان زیادی را برای شناخت و درک احساسات خود صرف می‌کنند و صلح‌جو و منظم هستند.
    `,
  };
}
