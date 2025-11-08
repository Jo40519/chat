import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const autenticacaoGuardGuard: CanActivateFn = (route, state) => {
   const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário autenticado → pode entrar na rota
        resolve(true);
      } else {
        // Não autenticado → redireciona para /login
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};
