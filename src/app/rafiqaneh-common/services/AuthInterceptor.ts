import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthorizationService, 
    private notificationService: NotificationService,
    private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getToken();

    //console.log('auth intercepted', req.url);
    if (!authToken) {
        return next.handle(req);
    }
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(tap( {
      next: () => {},
      error: (error: HttpErrorResponse) => { this.handleError(error) }
    }));
  }

  handleError(error: HttpErrorResponse) {
    console.log('failed http', error);
    if (error.url != environment.apiUrl + '/api/login' &&
    error.url != environment.apiUrl + '/api/loginOtp'
      && (error.status === HttpStatusCode.Unauthorized)) {
      this.notificationService.showError('توکن شما منقضی شده است. مجددا وارد شوید');
      this.auth.signOut();
      this.router.navigateByUrl('/login');
    }
  }
}