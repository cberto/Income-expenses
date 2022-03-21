import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) { return; }
    //console.log(this.formGroup);
    //console.log(this.formGroup.valid);
    //console.log(this.formGroup.value);
    const { email, password } = this.loginForm.value;
    this.authService.loginUser(email, password).then(credenciales => {
      console.log(credenciales);
      this.router.navigate(['/']);
    })
      .catch(err => console.log(err));

  }

}
