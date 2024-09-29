import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { gardnerPercentResult } from '../reyazi/reyazi.component';

@Component({
  selector: 'app-meyan-fardi',
  templateUrl: './meyan-fardi.component.html',
  styleUrls: ['./meyan-fardi.component.scss'],
})
export class MeyanFardiComponent implements OnInit {
  questionsForm: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
    //returnUrl: '/fardamoon/gardner/gardner-missions',
    steps: [
      {
        form: {
          formName: 'gardner-meyan-fardi',
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
              label: 'افراد اغلب برای مشورت یا راهنمایی گرفتن نزد من می آیند.',
              fieldTitle:
                'افراد اغلب برای مشورت یا راهنمایی گرفتن نزد من می آیند.',
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
                'ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.',
              fieldTitle:
                'ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.',
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
                'وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.',
              fieldTitle:
                'وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.',
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
              label: 'من حداقل سه دوست نزدیک دارم.',
              fieldTitle: 'من حداقل سه دوست نزدیک دارم.',
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
              label:
                'من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.',
              fieldTitle:
                'من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.',
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
              label: 'از آموزش دادن دانسته هایم به دیگران لذت می برم.',
              fieldTitle: 'از آموزش دادن دانسته هایم به دیگران لذت می برم.',
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
              label: 'من رهبر نامیده می شوم و خودم را چنان تصور می کنم.',
              fieldTitle: 'من رهبر نامیده می شوم و خودم را چنان تصور می کنم.',
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
              label: 'من در میان جمع احساس راحتی می کنم.',
              fieldTitle: 'من در میان جمع احساس راحتی می کنم.',
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
                'من در فعالیت های مدرسه، مسجد، همسایگان و فعالیت های اجتماعی درگیر می شوم.',
              fieldTitle:
                'من در فعالیت های مدرسه، مسجد، همسایگان و فعالیت های اجتماعی درگیر می شوم',
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
                'من ترجیح می دهم شب تعطیل را در یک میهمانی تا تنها در خانه بمانم.',
              fieldTitle:
                'من ترجیح می دهم شب تعطیل را در یک میهمانی تا تنها در خانه بمانم.',
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
    هوش بین‌فردی درک بالای افراد از محیط پیرامون و مردم و توانایی انجام کارهای گروهی را نشان می‌دهد. افراد دارای این ویژگی به‌راحتی می‌توانند در موقعیت‌های مختلف افراد را درک کرده و با ارزیابی احساسات و انگیزه دیگران، مسائل پیرامون را حل‌وفصل کنند. اگر کسی بدون اینکه احساسات‌تان را بیان کنید عصبانیت یا خوشحالی دیگران درک کند، این شخص از هوش بین‌فردی بالایی برخودار است..
    `,
  };
}
