import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate,  Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { NotificationService } from 'src/app/rafiqaneh-common/services/notification.service';
import { environment } from 'src/environments/environment';
import { FardamoonService } from './fardamoon.service';


@Injectable({
  providedIn: 'root'
})
export class FardamoonPlanetGuard implements CanActivate {
  constructor(private fardamoon: FardamoonService, private router: Router,
    private notif: NotificationService) {}
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //if (!environment.production) return true;
      return this.fardamoon.allCompleted$().pipe(map(s => {
        if (s) return true;
        this.notif.showError('شما هنوز همه مراحل را تکمیل نکرده اید');
        this.router.navigate(['/fardamoon/solar-system']);
        return false;
      }), catchError((err: any) => {
        this.notif.showError('شما هنوز همه مراحل را تکمیل نکرده اید');
        this.router.navigate(['/fardamoon/solar-system']);
        return of(false);
      }));
      // if (this.fardamoon.allCompleted()) {
      //   return true;
      // } else {
      //   this.notif.showError('شما هنوز همه مراحل را تکمیل نکرده اید');
      //   this.router.navigate(['/fardamoon']);
      //   return false;
      // }
  }
}
