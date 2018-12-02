import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup
  message: string
  destroy$: Subject<boolean> = new Subject()

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmedPassword: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  
  onSubmit() {
    const user = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.authService.registration(user).subscribe(data => {
      console.log(data)
    })
  }

}
