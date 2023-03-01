import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);
    if (loginService.isUserLoggedIn()) {
      const authRequest = request.clone(
        {setHeaders: {'Authorization': `Bearer ${loginService.authenticationUser.token}`}});
      return next.handle(authRequest)
    } else {
      return next.handle(request);
    }
  }
}
