import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth';
import { RegistrarUsuario } from './components/registrar-usuario/registrar-usuario';

const routes: Routes = [
  {
    path: '',
    component: Auth
  },
  {
    path: 'registrar',
    component: RegistrarUsuario
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
