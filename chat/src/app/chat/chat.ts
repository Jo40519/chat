import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {

  formChat = new FormGroup({
    mensagem: new FormControl('')
  })

  mensagens: Array<string> = [];

  enviarMensagem(mensagem: string) {
    this.mensagens.push(mensagem)
    console.log('MENSAGENS', this.mensagens);
    this.formChat.reset();
  }
}
