import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
            console.log('Response received:', event);
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            const elapsed = Date.now() - started;
            console.error(`Request for ${request.urlWithParams} failed after ${elapsed} ms.`);
            console.error('Error:', error);
          }
        }
      )
    );
  }
}
