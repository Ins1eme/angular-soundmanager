import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('auth-token')
        if(token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",  token)
            })
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}