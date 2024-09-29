import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from './authorization.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthorizationService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!environment.production && environment.noAuthGaurd) return true;
      if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
        return true;
      } else {
        localStorage.setItem('return_url', state.url);
        this.router.navigate(['/login']);
        return false;
      }
  }
}
