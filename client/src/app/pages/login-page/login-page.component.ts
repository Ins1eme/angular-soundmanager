import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  loginForm: FormGroup
  message: string
  destroy$: Subject<boolean> = new Subject()
  userEmail: string = 'asd'

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.userService.getUserEmail()
      .pipe(takeUntil(this.destroy$))
      .subscribe((email) => {
        this.userEmail = email
        this.loginForm.setValue({
          email: this.userEmail,
          password: ''
        })
      })    
  }


  onSubmit() {
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService.login(user)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(user => {
      this.userService.setUserEmail(user.user.email)
      this.message = user.message
    })
  }
  
  ngOnDestroy() {
    this.destroy$.next(true)
    this.userService.setUserEmail(null)
  }
}
