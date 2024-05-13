import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loading-request/loader.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {


  constructor(private loaderService: LoaderService) { }

  private requests: HttpRequest<any>[] = [];

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i <= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.set(this.requests.length > 0);
  }



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes(environment.apiDefault)) {

      try {
        this.loaderService.isLoading.set(this.requests.length > 0);
        request = request.clone();

        return next.handle(request).pipe(
          finalize(() => {
            this.removeRequest(request)
          }),
        );
      }

      catch (error) {
        request = request.clone();
        return next.handle(request).pipe(
          finalize(() => {
            this.removeRequest(request);
          }),
        )
      }

    }
    else {

      return next.handle(request)

    }

  }
}
