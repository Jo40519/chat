import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from './auth';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import { AuthRoutingModule } from './auth-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RegistrarUsuario } from './components/registrar-usuario/registrar-usuario';

@NgModule({
  declarations: [
    Auth,
    RegistrarUsuario
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    CardModule,
    InputTextModule
  ]
})
export class AuthModule { }
