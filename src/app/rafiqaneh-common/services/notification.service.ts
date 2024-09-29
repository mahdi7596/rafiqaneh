import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHelper } from './error-helper.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(message: string, type: 'error'|'info') {
    this.snackbar.open(message, undefined, {
      duration: type === 'info' ? 2000 : 4000,
      direction: 'rtl',
      panelClass: type + '-snackbar'
    });
  }

  showError(err: any) {
    let message = ErrorHelper.getErrorMessage(err);
    this.showMessage(message, 'error');
  }
}
