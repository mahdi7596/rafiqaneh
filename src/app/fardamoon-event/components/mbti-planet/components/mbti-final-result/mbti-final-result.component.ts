import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserFormsValuesDto } from 'src/app/rafiqaneh-common/models/UserFormsValuesDto';
import { FormBuilderService } from 'src/app/rafiqaneh-common/services/form-builder.service';

@Component({
  selector: 'app-mbti-final-result',
  templateUrl: './mbti-final-result.component.html',
  styleUrls: ['./mbti-final-result.component.scss'],
})
export class MbtiFinalResultComponent implements OnInit {
  quizResultName: string = 'شخصیت ';
  personalityType: string = '';
  jobGoodForYou: string = '';
  personality: string = '';
  personalityDescription: string = '';
  personalityTypeImage: string[] = [];
  personalityProperties: string[] = [];
  positiveThings: string = '';
  negativeThings: string = '';

  mbtiPercents: number[] = [];
  mbtiPercentsReady: boolean = false;

  finalResults: {
    personalityType: string;
    jobGoodForYou: string;
    personality: string;
    // personalityTypeImage: string[];
    personalityDescription: string;
    personalityProperties: string[];
    positiveThings: string;
    negativeThings: string;
  }[] = [
      {
        personalityType: 'درون‌گرا – حسی – منطقی – قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ISTJ) یا بازرس',
        personality: 'ISTJ',
        personalityDescription: `
      افراد دارای این تیپ شخصیتی عموماً انسان‌هایی جدی و رسمی به نظر می‌رسند. آن‌ها معمولاً به سنت‌ها علاقه‌ی زیادی دارند و به ارزش‌هایی مانند رعایت احترام، سخت‌کوشی و پذیرش مسئولیت اجتماعی اعتقاد دارند. آن‌ها معمولاً افرادی محافظه‌کار، آرام، ساکت ولی با پشتکار فراوان هستند. در محل کار، آن‌ها به مسئولیت‌پذیری و قابل اعتماد بودن شناخته می‌شوند. این افراد در یک محل کار سازمان‌یافته به سرعت رشد می‌کنند و ترجیح می‌دهند که برای انجام تمام وظایف کاریشان قوانین مدون و روشنی وضع شود. آن‌ها به تفکر تحلیلی و انتقادی گرایش زیادی دارند و به جزئیات نیز علاقه‌ی زیادی دارند. افراد دارای این تیپ شخصیتی انسان‌هایی منطقی هستند و تصمیمات تکانشی را دوست ندارند. این افراد برای مشاغل کارمندی گزینه‌ای عالی محسوب می‌شوند زیرا همان‌طور که گفته شد افرادی قابل اعتماد، هدف‌گرا و تیزبین هستند. این افراد همچنین برای اقتدار و سلسله‌مراتب اداری احترام زیادی قائل‌اند و انتظار دارند کارشان به آن‌ها احساس امنیت و ثبات بدهد.
      `,
        positiveThings: 'نقاط قوت: متعهد، رفتار محافظه‌کارانه در مسائل مالی، انتقادپذیر',
        negativeThings: 'نقاط ضعف: مشغله‌ی فکری زیاد، بی‌احساس، بیش از حد ساختاریافته',
        personalityProperties: [
          'دندان‌پزشک',
          'حسابدار',
          'مدیر زنجیره تأمین کالا',
          'تحلیلگر کسب و کار',
          'مشاغل نظامی',
          'مشاور حقوقی',
          'پزشکی',
          'بازرسی (از هر نوع)',
          'مدیریت مالی',
          'تحلیل داده',
        ],
      },
      {
        personalityType: 'درون‌گرا – شهودی – احساسی – قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (INFJ) یا حامی',
        personality: 'INFJ',
        personalityDescription: `
        این افراد معمولاً انسان‌هایی ایدئالیست هستند که نگاه عمیقی به جهان دارند. آن‌ها معمولاً به هیچ پدیده‌ای نگاه سطحی ندارند یا چیزها را همان‌طور که هستند نمی‌پذیرند. آن‌ها اغلب مملو از ایده‌های مختلف و تخیل خلاقی هستند. وقتی صحبت از مشاغل به میان می‌آید، آن‌ها عاشق محیط‌های کاری آرام و بدون تنش هستند و به عنوان متفکرانی عمیق شناخته می‌شوند که از چالش‌های کاری استقبال می‌کنند. آن‌ها همدل و دلسوز هستند و سعی می‌کنند برای دیگران افرادی مفید باشند.
        در واقع این تیپ شخصیتی بسیار نادر است و فقط ۱٪ جمعیت جهان در غالب این تیپ شخصیتی قرار می‌گیرند. این افراد به شدت به دیگران اهمیت می‌دهند، اما با وجود قوه‌ی تخیل قوی یک رؤیاپرداز محسوب نمی‌شوند. آن‌ها با اقدامات عملی خود سعی دارند تا جهان را به مکان بهتری تبدیل کنند.        
      `,
        positiveThings: 'نقاط قوت: دقیق، قاطع، متمرکز، حساس، خوش برخورد',
        negativeThings: 'نقاط ضعف: ولخرج، تفکر و تخیل بیش از حد، درگیری‌های درونی',
        personalityProperties: [
          'مشاور',
          'نویسنده',
          'دانشمند',
          'کتابدار',
          'روانشناس',
          'مشاور',
          'مدیر منابع انسانی',
          'نویسندگی/ ویرایش',
          'علوم مربوط به محیط زیست',
          'آموزش و پرورش ویژه',
        ],
      },
      {
        personalityType: 'درون‌گرا – شهودی – منطقی – قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],

        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (INTJ) یا معمار',
        personality: 'INTJ',
        personalityDescription: `
        افرادی که در این گروه قرار می‌گیرند، معمولاً انسان‌هایی آرام و محافظ کار هستند که از تنهایی لذت می‌برند. معاشرت با دیگران اغلب انرژی این افراد را از بین می‌برد و در نتیجه نیاز به خلوت کردن و تنهایی برای شارژ مجدد خودشان پیدا می‌کنند. آن‌ها به ایده‌ها و نظریه‌های مختلف علاقه‌مند هستند و دوست دارند از ساز و کار همه چیز سر در بیاورند. آن‌ها در برنامه‌ریزی و تدوین استراتژی مهارت زیادی دارند و از عدم قطعیت خوششان نمی‌آید. این گروه همچنین استعدادی زیادی در تشخیص ارتباط بین مسائل مختلف دارند که این مسئله توان حل مشکل را در آن‌ها بالا می‌برد. آن‌ها همچنین هم در تفکر شهودی و هم تفکر عملی مهارت زیادی دارند. در واقع این افراد دارای خلاقیت زیادی هستید اما بیشتر روی جزئیات تمرکز دارند و معمولاً دوست دارند به تنهایی کار کنند. آن‌ها همیشه در تلاش برای بهبود سیستم‌ها، فرایندها و هر چیز دیگری هستند که در مسیر کاری خود پیدا می‌کنند.
      `,
        positiveThings: 'نقاط قوت: مطمئن،شنوده‌ی خوب، خوش مشرب، باهوش',
        negativeThings: 'نقاط ضعف: سرشار از مشغله‌های فکری، بی احساس، کم عاطفه',
        personalityProperties: [
          'نوازنده',
          'سردبیر نشریات',
          'عکاس',
          'مشاور مالی',
          'مدیر بازاریابی',
          'معلم',
          'فیزیوتراپیست',
          'مدیریت پروژه',
          'مهندسی سیستم',
          'تحلیل سیستم',
          'مهندسی نرم‌افزار',
        ],
      },
      {
        personalityType: 'درون‌گرا – شهودی – احساسی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (INFP) یا میانجی',
        personality: 'INFP',
        personalityDescription: `
        افراد دارای تیپ شخصیتی INFP معمولاً افرادی ساکت هستند و ترجیح می‌دهند که در مورد خودشان صحبت نکنند. آن‌ها از گذراندن وقتشان به تنهایی و در مکان‌های آرام لذت می‌برند. این افراد عاشق تجزیه و تحلیل علائم و نشانه‌ها هستند و از گم شدن در تخیلات و رؤیاهای خود لذت می‌برند. در محیط‌های حرفه‌ای، INFPها به دنبال یادگیری چیزهای جدید و تغییر جهان هستند. در حالی که آن‌ها معمولاً برای انجام پروژه‌ها در دیگران شور و اشتیاق ایجاد می‌کنند، اما غالباً در مورد حفظ هیجان و انگیزه‌ی خود در طولانی مدت با چالش مواجه می‌شوند. این افراد همچنین اگرچه بسیار باهوش و دارای ذهنیتی باز هستند، اما از درس و مدرسه بدشان می‌آید و حتی از تصور انجام کارهای روتین برای طولانی مدت بیزارند. به همین دلیل است که مسائل روتین در مورد این افراد جوابگو نیست و آن‌ها با رفتارهای روتین مثل سر وقت بیدار شدن یا به موقع به محل کار رفتن همیشه مشکل دارند.
      `,
        positiveThings: 'نقاط قوت: باانگیزه، انعطاف‌پذیر، وفادارحامی، درک بالا، خوش مشرب',
        negativeThings: 'نقاط ضعف: احساسی، رویکرد بیش از حد انتقادی، خجالتی، تعارضات درونی بی‌پایان',
        personalityProperties: [
          'کپی‌رایتر',
          'مدیریت منابع انسانی',
          'فیزیوتراپیست',
          'متخصص سلامت روان',
          'هنرمند',
          'عکاس',
          'نویسندگی',
          'نوازنده',
          'هنرهای تجسمی',
          'ماساژ درمانی',
          'مددکار اجتماعی',
          'مدیریت موزه',
          'آسیب‌شناسی گفتار و زبان',
          'طراح مد',
          'طراحی گرافیکی',
        ],
      },
      {
        personalityType: 'برون‌گرا – حسی – احساسی – قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ESFJ) یا سفیر',
        personality: 'ESFJ',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ESFJ بسیار اجتماعی هستند و یاز دارند که همیشه با دیگران تعامل داشته باشند و مردم را خوشحال کنند. آن‌ها معمولاً در تمام زندگی خود در کانون توجه جمع قرار می‌گیرند و از سازماندهی رویدادهای اجتماعی برای دوستان و خانواده‌ی خود لذت می‌برند. از آنجا این افراد همیشه به دنبال ایجاد همکاری و هماهنگی در محل کار خود هستند، به طور کلی به دنبال مشاغلی هستند که به آن‌ها اجازه دهد نظم اجتماعی را اعمال کنند. آن‌ها معمولاً به نیازهای دیگران حساس هستند و در خواندن نشانه‌های اجتماعی مهارت زیادی دارند. این افراد همچنین بسیار وفادار و منظم هستند و به هر قیمتی از درگیری با دیگران اجتناب می‌کنند. ویژگی خوب دیگر این افراد این است که هیچ وقت از زیر انجام وظایف کاری خود فرار نمی‌کنند.
      `,
        positiveThings: 'نقاط قوت: رفتاری دوستانه، مدیریت مالی خوب، سخت‌کوش، علاقه‌مند به سنت‌ها',
        negativeThings: 'نقاط ضعف: از تغییرات ناراحت می‌شوند، سوءاستفاده‌گر، خود را فدا می‌کنند، دارای تعارضات درونی',
        personalityProperties: [
          'مدیر دفتر',
          'متخصص پشتیبانی فنی',
          'سرپرست موزه',
          'روانشناس',
          'محقق پزشکی',
          'برنامه‌ریزی رویدادهای اجتماعی',
          'پرستاری',
          'حقوقدان',
          'مسئول پذیرش',
          'امور پذیرایی'
        ],
      },
      {
        personalityType: 'برون‌گرا – شهودی – احساسی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ENFP) یا پیکارگر',
        personality: 'ENFP',
        personalityDescription: `
        افراد دارای این تیپ شخصیتی رفتاری بسیار فردگرایانه دارند. این افراد همیشه در جهت ایجاد ظاهر دلخواه خود، روش‌های فردی خود، اقدامات فردی خود و عادات و ایده‌های خودشان تلاش می‌کنند. آن‌ها دوست ندارند کسی آن‌ها را مجبور کند که در چهارچوبی بسته زندگی کنند. آن‌ها دارای یک ماهیت شهودی قوی هستند و دوست دارند در کنار دیگران باشند و با دیگران تعامل داشته باشند. آن‌ها دارای درک بسیار بالایی هستند و بیشتر اوقات بر اساس احساسات خود عمل می‌کنند. آن‌ها اغلب اوقات به محیط‌های کاری روتین و معمولی‌تر جذب می‌شوند. انگیزه آن‌ها بیشتر به واسطه‌ی اهدافی است که دنبال می‌کنند تا اینکه در انجام کارهایشان صرفاً به دنبال پول باشند. این افراد دارای یک روح رها و آزاد هستند که آن‌ها را تبدیل به فردی جذاب، مستقل و پرانرژی می‌کند. آن‌ها همچنین از تعامل با دیگران و کاوش در میان ایده‌های جدید لذت می‌برند که این مسئله در همه ابعاد مختلف زندگی‌شان نمود دارد. این افراد همچنین به خاطر اینکه همه چیز را جالب می‌دانند، معمولاً در انتخاب مسیر شغلی خود اغلب اوقات با مشکلاتی مواجه می‌شوند.
      `,
        positiveThings: 'نقاط قوت: با محبت، صریح، سرگرم‌کننده، الهام‌بخش، وفادار، درک بالا',
        negativeThings: 'نقاط ضعف: به راحتی خسته می‌شوند، حساس، تعارضات درونی، غیرواقع‌گرا',
        personalityProperties: [
          'گزارشگر یا مجری خبر',
          'ویرایشگر',
          'نوازنده',
          'مدیر تولید',
          'معلم دبستان',
          'مربی مهارت‌های زندگی',
          'مددکار اجتماعی',
          'مدیریت فروش',
          'مشاور املاک',
          'امور مشتریان',
          'کارگردانی فیلم',
          'فیلمنامه نویسی',
          'بازاریابی',
        ],
      },
      {
        personalityType: 'درون‌گرا – حسی – منطقی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ISTP) یا چیره‌دست',
        personality: 'ISTP',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ISTP عموماً افراد اسرارآمیزی هستند که معمولاً منطقی و عقلانی رفتار می‌کنند اما در عین حال می‌توانند افرادی خودجوش و مشتاق نیز باشند. ویژگی‌های شخصیتی آن‌ها به راحتی قابل تشخیص نیست و پیش‌بینی واکنش‌های آن‌ها دشوار است. آن‌ها اغلب افراد غیرقابل پیش‌بینی و خودجوش هستند اما این ویژگی‌های خود را از دیگران پنهان می‌کنند. در زمینه کاری خود نیز در عیب‌یابی و حل مشکلات عملکردی عالی دارند. آن‌ها در حالت عادی افرادی ساکت و محافظ کار هستند اما در مواقع ضروری با دیگران همکاری خوبی دارند. بسیاری از افراد دارای تیپ شخصیتی ISTP، کارهای تحلیلی یا فنی را ترجیح می‌دهند و در صورت بروز مشکلات به سرعت راه‌حلی پیدا می‌کنند. این گروه همچنین افرادی بسیار خلاق هستند که دارای ذهنیت فردگرایانه هستند و برای رسیدن به اهداف خود از انجام هیچ کاری دریغ نمی‌کنند.
      `,
        positiveThings: 'نقاط قوت: دارای اعتماد به نفس، شنونده‌ی خوبی هستند، خوش‌بین، واقع‌بین، با احترام',
        negativeThings: 'نقاط ضعف: دارای ذهنیتی بسته، کم‌حرف، بی‌احساس، کوته‌بین',
        personalityProperties: [
          'تکنسین فنی',
          'کارهای ساختمانی',
          'مهندس',
          'پزشکی قانونی',
          'بازرس/ کارآگاه',
          'مکانیک',
          'ورزش/دو و میدانی',
          'سازمان‌های اطلاعاتی',
          'مواد غذایی',
        ],
      },
      {
        personalityType: 'درون‌گرا – حسی – منطقی – قضاوتی',

        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',

        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ENFJ) یا قهرمان',
        personality: 'ENFJ',
        personalityDescription: `
        افرادی که دارای تیپ شخصیتی ENFJ هستند، تمرکز اصلی‌شان معطوف به انسان‌های دیگر است. آن‌ها افرادی برون‌گرا، آرمان‌گرا، دارای چهارچوب اصولی و اخلاقی هستند. آن‌ها می‌دانند چگونه با دیگران ارتباط برقرار کنند و بر شهود و احساساتشان تکیه کنند. هر چند آن‌ها بیشتر در تخیلات خود زندگی می‌کنند تا در دنیای واقعی. افراد دارای این تیپ شخصیتی رهبرانی طبیعی و بسیار با انگیزه هستند اما با این حال به نیازهای اطرافیان خود توجه زیادی دارند. آن‌ها به طور کلی احساس می‌کنند مجبورند دنیا را به مکان بهتری تبدیل کنند.این افراد همچنین دوست دارند به دیگران کمک کنند و در مرکز توجه باشند. آن‌ها دارای ایده‌هایی عالی و یک نظام ارزشی قوی هستند و از دفاع از ارزش‌ها و باورهای خود هیچ هراسی ندارند. افراد این گروه با انرژی خلاق خود و ضمن همکاری با دیگران می‌توانند به اهداف معنی دار خود برسند.
      `,
        positiveThings: 'نقاط قوت: با محبت، صمیمی، دلسوز، شوخ‌طبع، الهام‌بخش، وفادار، توان درک بالا',
        negativeThings: 'نقاط ضعف: دارای ذهنیتی بسته، کنترل‌کننده، انتقادگر، حساس، درگیری‌های درونی بسیار',
        personalityProperties: [
          'مشاور',
          'مدیر فروش',
          'مدیر منابع انسانی',
          'کارگردان هنری',
          'مدیر روابط عمومی',
          'تدریس',
          'مشاغل سیاسی',
          'مربی مهارت‌های زندگی',
          'سخنران انگیزشی',
        ],
      },
      {
        personalityType: 'برون‌گرا – حسی – منطقی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],

        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ESTP) یا کارآفرین',
        personality: 'ESTP',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ESTP نیاز شدیدی به داشتن تعاملات اجتماعی، پردازش منطقی افکارشان، امکان ابراز احساسات و عواطفشان و آزادی دارند. این گروه همچنین افرادی متفکر و منطقی هستند و بر مبنای داده‌ها و الگوهای موجود اقدام به تصمیم‌سازی می‌کنند. آن‌ها به طور طبیعی همیشه به دنبال فرصت‌های جدید هستند و با اشتیاق کارهای خود را دنبال می‌کنند که همین مسئله اغلب آن‌ها را به سمت موفقیت و فرصت‌های کاری بهتر سوق می‌دهد. آن‌ها توان لازم برای کنار آمدن با چالش‌های مختلف را دارند، اما روال عادی به سرعت برای آن‌ها خسته‌کننده می‌شود. این افراد به شدت پرانرژی و هدف‌گرا هستند و از دستاوردهای کوتاه مدت خود انرژی و روحیه می‌گیرند. آن‌ها عاشق اقدام کردن و برنامه‌ریزی‌های روزانه هستند. این گروه رایج‌ترین تیپ شخصیتی است و این افراد به راحتی می‌توانند با دیگران ارتباط برقرار کرده و با آن‌ها تعامل داشته باشند.
      `,
        positiveThings: 'نقاط قوت: جذاب، روشن‌فکر، با اطمینان بالا، مشتاق، سخاوتمند، محبوب، با احساس، شوخ‌طبع',
        negativeThings: 'نقاط ضعف: به راحتی خسته می‌شوند، دارای حساسیت پایین، بی تعهد، بیش از حد سخاوتمند، پرخطر، کوته‌بین، دارای تعارضات درونی',
        personalityProperties: [
          'آتش‌نشان',
          'پیراپزشک',
          'کارگردان هنری',
          'مدیر پروژه',
          'مدیر ساخت و ساز',
          'کارآفرینی',
          'مشاغل مدیریتی',
          'مشاغل سیاسی',
          'مشاور املاک',
          'بازیگری',
          'پذیرشگر',
          'مسئول گزارشات',
          'منابع انسانی',
        ],
      },
      {
        personalityType: 'برون‌گرا – حسی – احساسی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ESFP) یا مجری',
        personality: 'ESFP',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ESFP عموماً از اینکه مرکز توجه دیگران باشند بیشترین لذت را می‌برند و عاشق تعامل و به اشتراک‌گذاری آموخته‌هایشان با دیگران هستند. آن‌ها افرادی خوش‌مشرب، سخاوتمند، دارای رفتاری دوستانه، سرزنده و سرگرم‌کننده هستند. علاوه بر این، آن‌ها بسیار دلسوز هستند و در هر موقعیتی به فکر رفاه دیگران هستند. اگرچه این افراد از اینکه مرکز توجه دیگران باشند لذت می‌برند، اما از هر شغلی که هیجان‌انگیز و دارای ابعاد متنوع باشد، لذت می‌برند. این افراد در واقع روح و قلب هر مهمانی و رویدادهای اجتماعی هستند. آن‌ها حتی ممکن است بی مقدمه شروع به آواز خواندن بکنند و دوست دارند زمان و انرژی خود را به دیگران اختصاص دهند. هر شغلی که این افراد را از این آزادی باز دارد ۱۰۰٪ آن‌ها را بدبخت می‌کند. چون آن‌ها همیشه به دنبال هیجان، تعامل و فرصتی برای درخشش هستند.
      `,
        positiveThings: 'نقاط قوت: باهوش، خلاق، مشتاق، انعطاف‌پذیر، سخاوتمند، عمل‌گرا، با احساس',
        negativeThings: 'نقاط ضعف: مادی‌گرا، غیر متعهد، بی‌توجه به خود، حساس',
        personalityProperties: [
          'برنامه‌ریزی رویدادهای اجتماعی',
          'کارهای مبتنی بر اجرا و نمایش',
          'نماینده فروش',
          'متخصص زیبایی',
          'مهماندار هواپیما',
          'راهنمای تور',
          'مدیریت حراج آثار هنری',
          'برنامه‌ریزی سفر',
          'استندآپ کمدی',
        ],
      },
      {
        personalityType: 'برون‌گرا – حسی – منطقی– قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],

        jobGoodForYou: 'شغل مناسب تیپ شخصیتی (ESTJ) یا مدیر',
        personality: 'ESTJ',
        personalityDescription: `
        افرادی دارای تیپ شخصیتی ESTJ، افرادی به شدت سازمان‌یافته، فداکار، صادق، باوقار، پایبند به سنت‌ها و معتقد به انجام اموری هستند که احساس می‌کنند به لحاظ اخلاقی درست بوده و از نظر اجتماعی قابل قبول است. آن‌ها اغلب در جمع‌های مختلف نقش‌های رهبری را بر عهده می‌گیرند و مردم هم اغلب برای دریافت راهنمایی و مشاوره به سراغ آن‌ها می‌آیند. آن‌ها دارای رویکردی روشمند، سازمان‌یافته، قابل اعتماد و روشن هستند. آن‌ها در پیروی دقیق از رویه‌های تعیین شده و دستورالعمل‌های کاری عملکردی بسیار خوب دارند. آن‌ها همچنین افرادی فداکار و سخت‌کوش هستند و از همه مهم‌تر هدایت دیگران دقیقاً همین چیزی است که آن‌ها به شدت به آن علاقه‌مندند و در آن استعداد دارند. این افراد یک رهبر واقعی محسوب می‌شوند و برای سنت و نظم احترام زیادی قائل هستند. آن‌ها دارای یک قطب نمای اخلاقی قوی هستند و از هدایت دیگران لذت می‌برند. آن‌ها معمولاً به مشاغلی تمایل دارند که به آن‌ها حس ساختارمندی و سازماندهی می‌دهد، جایی که می‌توانند حس مسئولیت‌پذیری و وفاداری خود را اعمال کنید.
      `,
        positiveThings: 'نقاط قوت: با اطمینان، مشتاق، مدیریت مالی خوب، با مسئولیت، با ثبات',
        negativeThings: 'نقاط ضعف: سرسخت، کنترل‌کننده، بی‌حوصله، بی‌احساس، مادی‌گرا',
        personalityProperties: [
          'قاضی',
          'مربی ورزشی',
          'مسئول امور مالی',
          'مدیر هتل',
          'نماینده املاک',
          'مهندسی فروش',
          'ارزیابی اعتبارات',
          'کارگذار بیمه',
          'مشاور املاک',
          'مدیریت شرکتی',
          'مدیریت اجرایی',
          'مدیریت دولتی',
        ],
      },
      {
        personalityType: 'برون‌گرا – شهودی – منطقی – قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ‌ شخصیتی (ENTJ) یا فرمانده',
        personality: 'ENTJ',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ENTJ عموماً روی مسائل خارجی تمرکز دارند و با مسائل به شیوه‌ای منطقی و عقلانی برخورد می‌کنند. آن‌ها رهبرانی ذاتی هستند و از حس مسئولیت‌پذیری لذت می‌برند. آن‌ها همچنین چالش‌ها را فرصتی برای انگیزه دادن به خود می‌دانند. افراد دارای این تیپ شخصیتی به سرعت ناکارآمدی‌های موجود را شناسایی کرده و راه حل‌هایی برای مشکلات ارائه می‌دهند. آن‌ها برای تعیین هدف، برنامه‌ریزی و سازماندهی ارزش قائل هستند و از انگیزه و تفکر منطقی خود برای دستیابی به اهدافشان استفاده می‌کنند. این افراد به طور کلی کاریزماتیک و با اعتماد به نفس هستند و می‌توانند دیگران را برای رسیدن به یک هدف مشترک گرد هم جمع کنند. این افراد همچنین به سرعت تصمیم می‌گیرند و به واسطه‌ی پاداش‌های خارجی انگیزه و روحیه می‌گیرند. آن‌ها معمولاً مسئولیت تیم‌های مختلف را بر عهده می‌گیرند و اعتماد به نفس بالایی هم دارند. آن‌ها با تکیه بر اقتدار ذاتی خود سعی می‌کنند تا اطمینان حاصل کنند که تمام اعضای تیم وظایفی را که باید انجام دهد انجام داده و کارها طبق روال پیش می‌رود.
      `,
        positiveThings: 'نقاط قوت: دقیق، با اطمینان، کنجکاو، صریح، مشتاق، واقع‌گرا، قابل اعتماد',
        negativeThings: 'نقاط ضعف: جدال‌برانگیز، بداخلاق، کنترل‌گر، رویکرد بیش از حد انتقادی، بی‌احساس، تهدیدگر',
        personalityProperties: [
          'مدیریت کسب و کار',
          'مدیریت روابط عمومی',
          'مهندس مکانیک',
          'قاضی',
          'مدیریت ساخت و ساز',
          'ستاره‌شناس',
          'مدیریت بحران',
          'کارآفرینی',
          'تدوین استراتژی شرکتی',
          'مشاغل سیاسی'
        ],
      },
      {
        personalityType: 'درون‌گرا – شهودی – منطقی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ‌ شخصیتی (INTP) یا متفکر',
        personality: 'INTP',
        personalityDescription: `
        INTP ها به طور کلی منطقی‌ترین تیپ شخصیتی هستند. آن‌ها عاشق کشف الگوها هستند، سریع متوجه مشکلات می‌شوند و توانایی زیادی در خواندن افکار و احساسات دیگران دارند. این افراد معمولاً به فعالیت‌های روتین روزانه علاقه ندارند اما در عوض از محیط‌هایی که بتوانند خلاقیت خود را در آن نشان دهند لذت می‌برند. آن‌ها عاشق ارائه‌ی راه حل‌های حساب‌شده و بی‌طرفانه برای مشکلات مختلف هستند. در محل کار، افراد دارای تیپ شخصیتی INTP در حل مشکلات و یافتن راه‌حل‌های خلاقانه دارای عملکردی عالی هستند و در هنگام بروز مسائل تجاری در محل کار حضورشان برای تیم بسیار مفید است. آن‌ها معمولاً افرادی خلاق و باهوش هستند که حضورشان در هر تیمی مفید و اثربخش است.
        افراد دارای این تیپ شخصیتی همچنین عاشق تفکر و آزمایش ایده‌های جدید هستند. آن‌ها معمولاً بسیار مستقل هستند و دوست دارند نظریه‌های مختلف خود را تحلیل کنید و از آنجا که عاشق تفکر عمیق هستند، موقعیت‌های شغلی مختلفی را ترجیح می‌دهند که به آن‌ها امکان نوآوری و بروز خلاقیتشان را بدهد.        
      `,
        positiveThings: 'نقاط قوت: با اطمینان، خلاق، مشتاق، آرام، دوست‌داشتنی',
        negativeThings: 'نقاط ضعف: ذهنیت بسته، بی‌احساس، تعارضات درونی، مشکوک',
        personalityProperties: [
          'آهنگساز',
          'استاد دانشگاه',
          'نویسنده',
          'تهیه‌کننده',
          'مهندس پزشکی',
          'مشاور بازاریابی',
          'توسعه‌دهنده وب',
          'برنامه‌نویسی کامپیوتر',
          'توسعه نرم‌افزار',
          'تحقیق و پژوهش',
          'تحلیل کسب و کار',
          'تدوین استراتژی شرکتی',
          'نگارش فنی',
        ],
      },
      {
        personalityType: 'درون‌گرا – حسی – احساسی – قضاوتی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/qezavati.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ‌ شخصیتی (ISFJ) یا مدافع',
        personality: 'ISFJ',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ISFJ، افراد نیکوکاری هستند که از داشتن رویکردی سخاوتمندانه نسبت به افرادی که با آن‌ها با سخاوت برخورد می‌کنند، لذت می‌برند. آن‌ها برای ایجاد هماهنگی و روحیه همکاری بین دیگران ارزش قائل هستند. این افراد همچنین نسبت به احساسات دیگران حساس هستند و عموماً خونگرم و مهربان هستند. افراد دارای این تیپ شخصیتی دارای اخلاق و روحیه‌ی کاری با ثبات و مستحکمی هستند و وظایف خود را به بهترین نحو به انجام می‌رسانند. آن‌ها کارکنانی وظیفه‌شناس و با انضباط هستند که برای ایجاد و حفظ یک محیط کاری منظم تمام تلاش خود را می‌کنند. این افراد همچنین بسیار کارآمد و مسئولیت‌پذیر هستید اما تمایل زیادی به کمک به دیگران دارند. ویژگی‌های شخصیتی این گروه برای دنیای مدرن ضروری است، چون آن‌ها افرادی به شدت نوع‌دوست و دارای مهارت‌های کاری خوبی هستند، بنابراین معمولاً در خدمت به دیگران است که رضایت و خوشحالی خود را پیدا می‌کنند.
      `,
        positiveThings: 'نقاط قوت: متعهد، رفتار دوستانه، شنونده خوب، سخت‌کوش، سازمان‌یافته، عمل‌گرا',
        negativeThings: 'نقاط ضعف: ذهنیت بسته، روحیه‌ی راکد، درگیری‌های درونی',
        personalityProperties: [
          'حسابدار',
          'امور مالی',
          'کارمند بانکی',
          'تحلیلگر',
          'مدیر اداری',
          'عکاس',
          'تدریس',
          'پرستاری',
          'مددکاری اجتماعی',
          'امور مذهبی',
          'خدمات مشتریان',
          'منابع انسانی',
        ],
      },
      {
        personalityType: 'برون‌گرا – شهودی – منطقی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/boron-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/hessi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/manteghi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'تیپ‌ شخصیتی (ENTP) یا مجادله‌گر',
        personality: 'ENTP',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ENTP معمولاً از مکالمات کوتاه با دیگران یا غرق شدن در موقعیت‌های اجتماعی لذت نمی‌برند. آن‌ها افرادی باهوش و آگاه هستند که باید دائماً از نظر ذهنی تحریک شوند. آن‌ها عموماً افرادی منطقی، عقلانی و ریزبین هستند که ترجیح می‌دهند روی ایده‌های بزرگ تمرکز کنند و در برابر انجام کارهای تکراری و روتین همیشه مقاومت کنند. آن‌ها کار مفهومی و حل مسئله را ترجیح می‌دهند، به همین دلیل برای تفکر کارآفرینانه افرادی ایدئال محسوب می‌شوند. کار کردن در سلسله‌مراتب اداری برای این افراد به شدت دشوار است. افراد دارای این تیپ شخصیتی همچنین افرادی جسور، خلاق و دارای رفتاری طعنه‌آمیز هستند که از تلاش و سخت‌کوشی برای رسیدن به اهداف خود نمی‌ترسند. آن‌ها دارای هوش زبانی و ذکاوت بالایی هستند که آن‌ها به گزینه‌ای مناسب برای انجام مناظرات و بحث‌های تحلیلی مختلف تبدیل می‌کند. ویژگی دیگر آن‌ها این است که در محل کار خود، از پیدا کردن راه حل برای مشکلات فنی و فکری لذت می‌برند.
      `,
        positiveThings: 'نقاط قوت: دقت بالا، جذاب، با اطمینان، مشتاق انعطاف‌پذیر، تخیل قوی',
        negativeThings: 'نقاط ضعف: عاشق بحث کردن، بی تعهد، خطرناک، غیرقابل اعتماد',
        personalityProperties: [
          'وکیل',
          'کپی رایتر',
          'برنامه‌ریزی مالی',
          'روانشناس',
          'تحلیلگر سیستم',
          'کارگردان هنری',
          'کارشناس عملیات',
          'معاملات سهام',
          'مدیریت فروش',
          'تولید فیلم',
          'روابط عمومی',
          'مشاوره حقوقی',
          'مهندسی',
        ],
      },
      {
        personalityType: 'درون‌گرا – حسی – احساسی – ادراکی',
        // personalityTypeImage: [
        //   'assets/fardamoon-event/mbti-percent-result/daroon-gara.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/shohodi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/ehsasi.jpg',
        //   'assets/fardamoon-event/mbti-percent-result/edraki.jpg',
        // ],
        jobGoodForYou: 'شغل مناسب تیپ‌ شخصیتی (ISFP) یا ماجراجو',
        personality: 'ISFP',
        personalityDescription: `
        افراد دارای تیپ شخصیتی ISFP، افرادی درون‌گرا هستند که در ظاهراً چندان درون‌گرا نیستند. آن‌ها افرادی خوش‌مشرب با رفتاری صمیمانه و دوستانه هستند، که بودن در کنار آن‌ها برای هر کسی می‌تواند سرگرم‌کننده باشد. آن‌ها می‌خواهند از زندگی‌شان حداکثر بهره ممکن را ببرند و زمان حال را با تمام وجود در آغوش بگیرند. آن‌ها برای ملاقات با افرادی که از کاوش در امور مختلف و کشف تجربیات جدید لذت می‌برند، ارزش و اهمیت زیادی برخوردار هستند. در محل کار، آن‌ها ترجیح می‌دهند طبق برنامه خودشان و بدون دخالت دیگران وظایف و مأموریت‌های کاری خود را انجام دهند. هماهنگی و آرامش برای آن‌ها بسیار مهم است و ترجیح می‌دهند از هر گونه درگیری اجتناب کنند و نظراتشان را عموماً برای خودشان نگه دارند. این افراد همچنین عاشق ماجراجویی و زندگی در لحظه هستند. دیدن زیبایی‌ها و آثار هنری برای آن‌ها بسیار لذت‌بخش و الهام‌بخش است. آن‌ها همچنین اهمیت زیادی به ثروت، قدرت یا امنیت نمی‌دهند و در شغل خود به دنبال آزادی عمل، خلاقیت و فرصتی برای ابراز ابعاد هنرمندانه روح خود هستند.
      `,
        positiveThings: 'نقاط قوت: رفتار محبت‌آمیز، انعطاف‌پذیر، خوش‌بین، عمل‌گرا، با احساس، خوش‌مشرب',
        negativeThings: 'نقاط ضعف: نگرش بدبینانه، نگرش کوته‌بینانه، تعارضات داخلی',
        personalityProperties: [
          'حسابدار',
          'مدیریت رسانه‌های اجتماعی',
          'بینایی‌سنجی',
          'دامپزشک',
          'باستان‌شناس',
          'مددکار اجتماعی',
          'کار درمانگر',
          'طراح مد',
          'طراح لوازم‌آرایشی',
          'طراحی گرافیک',
          'نوازندگی',
          'مربی تناسب‌اندام',
          'کارگردان هنری',
          'عکاسی',
        ],
      },]

  resultsPersonlities = [
    {
      formName: 'mbti-boroon-daroon-gara',
      results: [
        {
          title: 'درون گرا',
          personalityType: 'I',
        },
        {
          title: 'برون گرا',
          personalityType: 'E',
        },
      ],
    },
    {
      formName: 'mbti-shohodi-hessi',
      results: [
        {
          title: 'شهودی',
          personalityType: 'N',
        }, {
          title: 'حسی',
          personalityType: 'S',
        },

      ],
    },
    {
      formName: 'mbti-ehsasi-manteghi',
      results: [
        {
          title: 'فکری',
          personalityType: 'T',
        },
        {
          title: 'احساسی',
          personalityType: 'F',
        },
      ],
    },
    {
      formName: 'mbti-ghezavati-edraki',
      results: [
        {
          title: 'منعطف',
          personalityType: 'P',
        },
        {
          title: 'منضبط',
          personalityType: 'J',
        },
      ],
    },
  ];

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private formService: FormBuilderService
  ) {
  }
 
  ngOnInit(): void {
    this.getMbtiResult();

  }

  goBack() {
    this.router.navigate(['/fardamoon/mbti/mbti-missions']);
  }
  goSolarsystem() {
    this.router.navigate(['/fardamoon/solar-system']);
  }

  getMbtiResult() {
    let formNames = [
      'mbti-boroon-daroon-gara',
      'mbti-shohodi-hessi',
      'mbti-ehsasi-manteghi',
      'mbti-ghezavati-edraki',
    ];
    this.spinner.show();
    this.formService.getFormsValues(formNames).subscribe({
      next: (result) => {
        this.spinner.hide();
        // console.log(result);
        let personality = ''; // eg. ISTJ
        for (let form of formNames) {
          let formResult = result.find((s) => s.form == form);
          if (formResult) {
            personality += this.calculateMbtiPersonlity(formResult);
          }
        }
        console.log('calculated personality: ', personality);
        let personalityDetails = this.finalResults.find(
          (s) => s.personality.toUpperCase() == personality
        );
        if (personalityDetails) {
          this.personalityType = personalityDetails.personalityType;
          this.jobGoodForYou = personalityDetails.jobGoodForYou;
          this.personality = personalityDetails.personality;
          this.personalityDescription =
            personalityDetails.personalityDescription;
          this.personalityProperties = personalityDetails.personalityProperties;
          // this.personalityTypeImage = personalityDetails.personalityTypeImage;
          this.positiveThings = personalityDetails.positiveThings;
          this.negativeThings = personalityDetails.negativeThings;
        } else console.error('personality is not defined in json');
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }

  calculateMbtiPersonlity(form: UserFormsValuesDto) {
    console.log(form)
    let scoreA = 45;
    let scoreB = 45;
    for (let field of form.fields) {
      if (field.value != null) {
        let s = +field.value - 4;
        scoreA += s;
        scoreB -= s
      }
    }

    const percentResultA = Math.round((scoreA / 90) * 100);
    const percentResultB = Math.round((scoreB / 90) * 100);

    console.log(percentResultA, percentResultB);

    this.mbtiPercents.push(percentResultA, percentResultB);
    this.mbtiPercentsReady = true;


    let result = this.resultsPersonlities.find((s) => s.formName == form.form);
    console.log(this.mbtiPercents)


    if (result) {
      if (scoreB > scoreA) {
        return result.results[1].personalityType;
      } else {
        return result.results[0].personalityType;
      }
    }

    return '';
  }
}
