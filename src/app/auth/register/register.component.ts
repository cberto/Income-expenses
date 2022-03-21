import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.registroForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  crearUsuario() {
    if (this.registroForm.invalid) { return; }
    //console.log(this.formGroup);
    //console.log(this.formGroup.valid);
    //console.log(this.formGroup.value);
    const { email, password } = this.registroForm.value;
    this.authService.newUser(email, password, email).then(credenciales => {
      console.log(credenciales);
      this.router.navigate(['/']);
    })
      .catch(err => console.log(err));

  }

}
