import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-usuarios',
  standalone: false,
  templateUrl: './tabela-usuarios.html',
  styleUrl: './tabela-usuarios.scss',
})
export class TabelaUsuarios {

  @Input() usuarios: any[] = [];
}
