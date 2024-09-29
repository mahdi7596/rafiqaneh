import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMultiStepFormDefinition } from 'src/app/rafiqaneh-common/components/form-builder/IFormDefinitionDto';
import { mbtiPercentResult } from '../boroon-daroon-gara/boroon-daroon-gara.component';

@Component({
  selector: 'app-ghezavati-edraki',
  templateUrl: './ghezavati-edraki.component.html',
  styleUrls: ['./ghezavati-edraki.component.scss'],
})
export class GhezavatiEdrakiComponent implements OnInit {
  questionsForm: IMultiStepFormDefinition = {
    currentStep: 0,
    submitApi: '/api/forms/submit',
    //returnUrl: '/fardamoon/mbti/mbti-missions',
    steps: [
      {
        form: {
          formName: 'mbti-ghezavati-edraki',
          fields: [
            {
              fieldName: 'q1',
              type: 'imageselect',
              options: [
                {
                  title:
                    'مایل هستم انعطاف پذیر باشم و در لحظه های اخر تصمیم بگیرم. ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title: ' مایل هستم همه چیز برنامه ریزی شده باشد.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q2',
              type: 'imageselect',
              options: [
                {
                  title:
                    'ترجيحاً ملاقات ها و دیدارهای خود را هر طور که پیش آید و بر اساس موقعیت آزادانه انجام میدهم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'ترجیحاً دیدار با افراد و وعده ملاقات را از پیش تعیین میکنم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q3',
              type: 'imageselect',
              options: [
                {
                  title:
                    'غالباً انجام کارهای پیش پا افتاده و جزئی را فراموش میکنم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'منظور جلوگیری از فراموش شدن انجام کارها آنها را یادداشت میکنم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q4',
              type: 'imageselect',
              options: [
                {
                  title:
                    'معمولاً کارها را شروع میکنم و حین اجرا به رفع اشکالهای اجرایی و تدارک مورد نیاز می پردازم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'قبل از اجرای طرح ها و کارها، برنامه ریزی را انجام میدهم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q5',
              type: 'imageselect',
              options: [
                {
                  title:
                    'در انجام کارهایی که از قبل پیش بینی نشده و یا فعالیت هایی که به سرعت و عکس العمل فوری نیاز دارند، موفق هستم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'در انجام کارهایی که بر اساس طرح و برنامه میباشد، موفق هستم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q6',
              type: 'imageselect',
              options: [
                {
                  title:
                    ' معمولاً در کارهای روزانه مایلم برحسب ضرورتها و فوریتهایی که پیش می آید عمل کنم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'معمولاً در کارهای روزانه مایلم که طبق برنامه عمل کنم                ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: 'تعمیر شیر آب خراب',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q7',
              type: 'imageselect',
              options: [
                {
                  title:
                    'معمولا کارها را شروع میکنم و در حین اجرا به رفع مشکلات پیش آمده می پردازم',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    ' معمولاً قبل از شروع کارها مقدمات کار را آماده و مشکلات را پیش بینی میکنم                ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q8',
              type: 'imageselect',
              options: [
                {
                  title:
                    'تهیه فهرست از کارهایی که باید در روز تعطیل انجام داد را کاری بیهوده و عبث می دانم.                ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'تهیه فهرست از کارهایی که باید در روز تعطیل انجام داد را کاری جدی و سودمند می دانم. ',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q9',
              type: 'imageselect',
              options: [
                {
                  title:
                    'غالباً خود را ملزم به انجام کارها سروقت معین و مشخص ندانسته و خود را در محدوده زمان مقید نمی کنم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'غالباً برنامه خود را به طور مشخص و دقیق تعیین کرده و بر انجام آنها در سروقت مقرر اصرار می ورزم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q10',
              type: 'imageselect',
              options: [
                {
                  title:
                    'معمولا زندگی خود را با توجه به اوضاع و احوالی که پیش میآید تنظیم و اداره می کنم.                ',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'معمولاً کارهایی را که مایل به انجام آن هستم یادداشت کرده یا حداقل به طور مرتب به خاطر می سپارم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q11',
              type: 'imageselect',
              options: [
                {
                  title:
                    'بعضی افراد مرا آدمی بی نظم و دارای زندگی شلوغ می دانند.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title: 'بعضی افراد مرا آدمی متوقع و غیرقابل انعطاف می دانند.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q12',
              type: 'imageselect',
              options: [
                {
                  title:
                    'هر وقت که مناسب بود و فرصت دست داد نسبت به انجام کارها آزادانه و بدون فشار اقدام می کنم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'این مهم است که از قبل بدانم چه کاری یا چه چیزی از من انتظار دارند تا به انجام آنها بپردازم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q13',
              type: 'imageselect',
              options: [
                {
                  title:
                    'معمولا بدون فوت وقت یک کار با پروژه را شروع و به هر قسمتی از آن که ممکن باشد زودتر می پردازم.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'معمولا در انجام کارها آنها را به اجزای مشخص تقسیم کرده و سپس به ترتیب به انجام بخشهای مشخص شده می پردازم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q14',
              type: 'imageselect',
              options: [
                {
                  title:
                    'علاقه مندم جلسات و گردهمایی ها هنگامی شروع شود که همگی افراد حضور و آمادگی لازم را داشته و احساس راحتی کنند.',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'علاقه مندم که جلسات رأس ساعت مقرر شروع شود و روی وقت شناسی تاکید دارم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
              classes: 'mt-4',
              validation: { isRequired: true },
            },
            {
              fieldName: 'q15',
              type: 'imageselect',
              options: [
                {
                  title:
                    'مقید بودن به برنامه ای که از قبل مشخص شده باشد برای من جالب نیست .',
                  value: '1',
                  srcUrl: 'assets/fardamoon-event/questions/purple-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
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
                  title:
                    'از انجام دادن کارهایی که از قبل مشخص شده ،باشد احساس رضایت دارم.',
                  value: '7',
                  srcUrl: 'assets/fardamoon-event/questions/yellow-circle.png',
                  imageClass: 'w-12',
                  contentClass: 'w-16',
                },
              ],
              value: null,
              label: '',
              fieldTitle: '',
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
    this.router.navigate(['/fardamoon/mbti/mbti-missions']);
  }

}
