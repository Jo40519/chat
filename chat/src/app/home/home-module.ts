import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { TabelaUsuarios } from './components/tabela-usuarios/tabela-usuarios';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    Home,
    TabelaUsuarios
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    TableModule
  ]
})
export class HomeModule { }
