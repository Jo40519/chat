import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balao-chat',
  standalone: false,
  templateUrl: './balao-chat.html',
  styleUrl: './balao-chat.scss',
})
export class BalaoChat {

  @Input({required: true}) mensagens!: Array<string>
}
