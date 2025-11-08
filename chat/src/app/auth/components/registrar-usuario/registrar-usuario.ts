import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthLogin } from '../../service/auth-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  standalone: false,
  templateUrl: './registrar-usuario.html',
  styleUrl: './registrar-usuario.scss',
})
export class RegistrarUsuario {

  private readonly _authService = inject(AuthLogin);
  private readonly _router = inject(Router);

    loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });

  registrar() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this._authService.register(email!, password!).subscribe({
        next: (user) => {
          console.log('Usuário registrado com sucesso', user);
          this._router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erro ao registrar usuário', error);
        }
      });
    }
  }
}
