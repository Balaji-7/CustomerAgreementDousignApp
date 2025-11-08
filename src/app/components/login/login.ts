import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
  MatCardModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService,private cd: ChangeDetectorRef) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required],
    });
  }

login() {
  this.cd.detectChanges(); 
  const { email, password, role } = this.form.value;

  if (
    (email === 'admin@example.com' && password === 'admin123' && role === 'admin') ||
    (email === 'user@example.com' && password === 'user123' && role === 'user')
  ) {
    // Call your AuthService method
    this.auth.login(role as 'admin' | 'user');

    // Also store additional info
    localStorage.setItem('userEmail', email);
  } else {
    alert('Invalid demo credentials');
  }
}

}
