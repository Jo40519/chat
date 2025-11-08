import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthLogin } from './service/auth-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth implements OnInit {


  private readonly _auth = inject(AuthLogin);
  private readonly _router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
  });

    ngOnInit(): void {
      console.log('Usuário logado', this._auth.currentUser$);
  }

  login() {
    const { email, password } = this.loginForm.value;
    this._auth.login(email!, password!).subscribe({
      next: () => this._router.navigate(['/home']),
      error: err => console.error('Erro ao logar:', err)
    });
  }
}
