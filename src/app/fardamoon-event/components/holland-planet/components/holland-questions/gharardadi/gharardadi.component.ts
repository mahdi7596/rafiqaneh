import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { hollandPercentResult } from '../vagheh-gara/vagheh-gara.component';

@Component({
  selector: 'app-gharardadi',
  templateUrl: './gharardadi.component.html',
  styleUrls: ['./gharardadi.component.scss'],
})
export class GharardadiComponent implements OnInit {
  questionsForm: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
    //returnUrl: '/fardamoon/holland/holland-missions',
    steps: [
      {
        form: {
          formName: 'holland-gharardadi',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'تنظیم چکهای حقوق ماهانه کارمندان دفتر ',
              fieldTitle: 'تنظیم چکهای حقوق ماهانه کارمندان دفتر ',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'تهیه فهرست از لوازم موجود در کامپیوتر یا دفتر یادداشت',
              fieldTitle:
                'تهیه فهرست از لوازم موجود در کامپیوتر یا دفتر یادداشت',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'استفاده از یک برنامه کامپیوتری برای تهیه صورتحساب مشتری',
              fieldTitle:
                'استفاده از یک برنامه کامپیوتری برای تهیه صورتحساب مشتری',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'حفظ و نگهداری از پرونده ها و سوابق کارمندان',
              fieldTitle: 'حفظ و نگهداری از پرونده ها و سوابق کارمندان',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'محاسبه و ثبت داده های عددی و آماری',
              fieldTitle: 'محاسبه و ثبت داده های عددی و آماری',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'راه اندازی یک ماشین حساب',
              fieldTitle: 'راه اندازی یک ماشین حساب',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'مدیریت معاملات بانکی مشتری',
              fieldTitle: 'مدیریت معاملات بانکی مشتری',
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
                  srcUrl: 'assets/fardamoon-event/questions/circle-gray.png',
                  imageClass: 'w-8',
                },
                {
                  title: '',
                  value: '4',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-10',
                },
                {
                  title: 'موافقم ',
                  value: '5',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                },
              ],
              value: null,
              label: 'جابه جایی و دریافت پرونده ها',
              fieldTitle: 'جابه جایی و دریافت پرونده ها',
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
    this.router.navigate(['/fardamoon/holland/holland-missions']);
  }

  percentResult: hollandPercentResult = {
    userPercent: 0,
    resultExplanation:
      'علاقمندی شما به گروه مشاغل اداری و منشی‌گری، حسابداری و بایگانی',
    resultSuggestion: [
      'محتاط بودن',
      'مطیع بودن',
      'منظم بودن',
      'صرفه‌جو بودن',
      'دوراندیش بودن',
      'وظیفه‌شناس بودن',
    ],
  };
}
