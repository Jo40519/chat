import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { autenticacaoGuardGuard } from './shared/guard/autenticacao-guard-guard';

const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat-module').then(m => m.ChatModule),
    canActivate: [autenticacaoGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home-module').then(m => m.HomeModule),
    canActivate: [autenticacaoGuardGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
