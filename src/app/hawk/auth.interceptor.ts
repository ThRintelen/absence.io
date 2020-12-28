import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as hawk from '@hapi/hawk';
import { Credentials } from '@hapi/hawk/lib/client';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const credentials: Credentials = {
      id: '5a37d25b93146fc128100b9e', // the key identifier
      key: '261173b95adb0e8deb0c790c360aecad286ec79eb675fe7ea132fd9761dfd5da', // the actual key
      algorithm: 'sha256', // the algorythm used to build the request header
    };

    const header = hawk.client.header(request.url, request.method, {
      credentials,
    });
    request = request.clone({
      setHeaders: {
        Authorization: header.header,
      },
    });

    return next.handle(request);
  }
}
