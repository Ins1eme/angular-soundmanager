import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    userEmail: Subject<string> = new Subject()

    constructor() {}

    setUserEmail(email: string): void {
        this.userEmail.next(email)
    }

    getUserEmail(): Observable<string> {
        return this.userEmail.asObservable()
    }

}