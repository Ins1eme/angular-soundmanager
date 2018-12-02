import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  loginForm: FormGroup
  message: string
  destroy$: Subject<boolean> = new Subject()

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
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
      this.message = user.message
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
  }



}
