export interface KarmoonReportDto {
    k2: {
        testResult: string;
        scores: {
            E?: number;
            C?: number;
            S?: number;
            A?: number;
            I?: number;
            R?: number;
        };
    };
    k3: {
        testResult: string;
        scores: {
            T?: number;
            F?: number;
            S?: number;
            N?: number;
            E?: number;
            I?: number;
            J?: number;
            P?: number;
        };
    };
    k4: {
        testResult: string;
        scores: {
            I?: number;
            S?: number;
            B?: number;
            L?: number;
            V?: number;
            J?: number;
            M?: number;
            N?: number;
        };
    };
};

export const MBTI_TITLES = {
    T: { name: 'Thinking', title: 'منطقی' },
    F: { name: 'Feeling', title: 'احساسی' },
    J: { name: 'Judging', title: 'قضاوت‌گر' },
    P: { name: 'Perceiving', title: 'ادراکی' },
    S: { name: 'Sensing', title: 'حسی' },
    N: { name: 'Intuition', title: 'شهودی' },
    E: { name: 'Extraverts', title: 'برون‌گرا' },
    I: { name: 'Introverts', title: 'درون‌گرا' },
};

export const MBTI_TYPE_TITLES = {
    INTJ: 'معمار',
    INTP: 'منطق دان',
    ENTJ: 'فرمانده',
    ENTP: 'مجادله گر',
    INFJ: 'حامی',
    INFP: 'میانجی',
    ENFJ: 'قهرمان',
    ENFP: 'پیکارگر',
    ISTJ: 'تدارکاتچی',
    ISFJ: 'مدافع',
    ESTJ: 'مجری',
    ESFJ: 'سفیر',
    ISTP: 'چیره دست',
    ISFP: 'ماجراجو',
    ESTP: 'کار آفرین',
    ESFP: 'سرگرم کننده'
};

export const HOLLAND_TITLES =
{
    E: { name: 'Enterprising', title: 'متهور', description: 'مشاغل متناسب با تیپ متهور اغلب شامل راه اندازی و اجرای پروژه ها می شوند. این مشاغل می تواند شامل رهبری دیگران و تصمیم گیری های بسیار باشد. این گونه کارها گاهی نیاز به ریسک کردن داشته و اغلب با معاملات کاری سروکار دارند' },
    C: { name: 'Conventional', title: 'قراردادی', description: 'مشاغل قراردادی اغلب از مراحل و روشهای تعیین شده تشکیل می شوند. این مشاغل بیش از اینکه با ایده ها سروکار داشته باشند شامل کار با داده ها و جزئیات میشوند. در این گونه مشاغل معمولاً یک مسیر مشخص برای پیگیری وجود دارد .' },
    S: { name: 'Social', title: 'اجتماعی', description: 'مشاغل اجتماعی اغلب شامل کارهایی می شود که در ارتباط با افراد و آموزش دادن به افراد است. این مشاغل عمدتاً مشاغلی هستند که با کمک کردن و یا ارائه خدمات به دیگران مرتبط هستند .' },
    A: { name: 'Asrtistic', title: 'هنری', description: 'مشاغل هنری اغلب شامل کار با شکل ها، طرح ها و الگوها است. آنها اغلب به بیان خود نیاز دارند و می توانند کارها را بدون پیروی از مجموعه ای از قوانین روشن انجام دهند' },
    I: { name: 'Investigative', title: 'جستجوگر', description: 'مشاغل جستجوگرایانه اغلب شامل کار با ایده ها و نیاز به مقدار زیادی تفکر وسیع دارد. این مشاغل می توانند کارهایی مرتبط با کشف مشکلات ذهنی یا کشف حقیقت باشد .' },
    R: { name: 'Realistic', title: 'واقع گرا', description: 'مشاغل متناسب با تیپ واقعگرا اغلب مشاغلی است که شامل کارهای عملی، مسائل و راه حل های دستی می شود. آنها اغلب با گیاهان، حیوانات و مواد دنیای واقعی مانند چوب، ابزار و ماشین آلات سروکار دارند. بسیاری از اشخاص به شغلی نیاز دارند که در فضای باز باشد، و نیاز زیادی با سروکار داشتن با دیگران یا دفتر و کاغذ نداشته باشد' },
};

export const GARDNER_TITLES =
{
    L: { name: '', title: 'هوش ریاضی-منطقی' },
    S: { name: '', title: 'هوش فضایی' },
    V: { name: '', title: 'هوش زبانی-کلامی' },
    B: { name: '', title: 'هوش بدنی-جنبشی' },
    I: { name: '', title: 'هوش میان فردی' },
    J: { name: '', title: 'هوش درون فردی' },
    M: { name: '', title: 'هوش موسیقیایی' },
    N: { name: '', title: 'هوش طبیعت گرا' },
};