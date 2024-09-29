export class PersianHelper {
    static persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    static arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];


    static toEnglishNumbers(str: string): string {
        if (!str) return str;
        for (let i = 0; i < 10; i++) {
            str = str.replace(this.persianNumbers[i], i.toString()).replace(this.arabicNumbers[i], i.toString());
        }
        return str;
    }
}