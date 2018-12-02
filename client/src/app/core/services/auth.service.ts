import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private token = null

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    login(user: User): Observable<any> {
        return this.http.post<any>('http://localhost:5000/api/auth/login', user)
            .pipe(
                tap((data) => {
                    if(data.auth) {
                        localStorage.setItem('auth-token', data.token)
                        this.setToken(data.token)
                        this.router.navigate(['authors'])
                    }
                })
            )
    }

    setToken(token: string) {
        this.token = token
    }
    getToken(): string {
        return this.token
    }

    isAuthenticated(): boolean {
        this.token = localStorage.getItem('auth-token')
        return !!this.token
    }

    logOut(): void {
        localStorage.removeItem('auth-token')
        this.router.navigate(['/login'])
    }

    registration(user: User): Observable<User> {
        return this.http.post<User>('http://localhost:5000/api/auth/register', user)
    }
}   