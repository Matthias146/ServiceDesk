import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { User } from '../../../core/models/user.model';
import { Router } from '@angular/router';
import { Role } from '../../../core/models/role.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private authService = inject(AuthService);
  private router = inject(Router);
  loginForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    role: new FormControl<Role>('agent', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { name, role } = this.loginForm.getRawValue();
    const user: User = {
      id: 1,
      name,
      role,
    };
    this.authService.login(user);
    this.router.navigate(['/dashboard']);
  }

  get invalidName() {
    return this.loginForm.controls.name.invalid && this.loginForm.controls.name.touched;
  }
}
