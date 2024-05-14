import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loading-request/loader.service';
import { environment } from 'src/environments/environment';
import { SafeAny } from '@app/shared/models/safe-types.models';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {


  constructor(private loaderService: LoaderService) { }

  private requests: HttpRequest<SafeAny>[] = [];

  removeRequest(req: HttpRequest<SafeAny>) {
    const i = this.requests.indexOf(req);
    if (i <= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.set(this.requests.length > 0);
  }



  intercept(request: HttpRequest<SafeAny>, next: HttpHandler): Observable<HttpEvent<SafeAny>> {

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
