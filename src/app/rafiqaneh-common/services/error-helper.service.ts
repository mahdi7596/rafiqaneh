import { HttpErrorResponse } from "@angular/common/http";


export class ErrorHelper {

  
  static getErrorMessages(err: any): string[] {
    let errors = [];
    if (err instanceof HttpErrorResponse) {
        if (err.status === 422) {
            for (let k in err.error) {
                errors.push(err.error[k]);
              }
        } 
        else if (err.status === 429) {
            errors.push('برای ایجاد درخواست جدید باید زمان بیشتری صبر کنید');
        }
        else if (err.status === 401) {
            errors.push('نشست شما منقضی شده است، لطفا دوباره وارد سامانه شوید');
        }
        else if (err.status === 403) {
            errors.push('دسترسی به این بخش مجاز نیست');
        }
        else {
            if (err.error.message) {
                errors.push(err.error.message);
            } else if (err.error) {
                errors.push(err.error);
            }
        }
    }
    else if (typeof err === 'string') {
        errors.push(err);
    }
    else {
        errors.push(err?.message);
    }
    return errors;
  }

  static getErrorMessage(err: any): string {
      let errors = this.getErrorMessages(err);
      return errors.join(', ');
  }
}
