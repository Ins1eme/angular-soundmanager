import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest < any >, next: HttpHandler): Observable < HttpEvent < any >> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.logOut();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}