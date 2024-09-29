import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class ReloginGuard implements CanActivate {
  constructor(private auth: AuthorizationService, private router: Router,
    private notif: NotificationService) {}
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //if (!environment.production && environment.noAuthGaurd) return true;
      if (!this.auth.isAuthenticated()) {
        return true;
      } else {
        this.notif.showError('شما قبلا وارد سامانه شده اید');
        this.router.navigate(['/']);
        return false;
      }
  }
}
