import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<HttpEvent<any>> {
    const absUrl = `${environment.baseUrl}/${req.url}`;
    req = req.clone({
      url: absUrl
    });
    return next.handle(req);
  }

  constructor() { }
}
