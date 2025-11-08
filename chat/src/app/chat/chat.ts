import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthLogin } from '../auth/service/auth-login';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat-service';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Chat implements AfterViewInit {

  private readonly _authLogin = inject(AuthLogin);
  private readonly chat = inject(ChatService);

  usuario!: User | null;
  mensagens$!: Observable<any[]>;
  formChat = new FormGroup({
    mensagem: new FormControl('')
  })
  mensagens: Array<string> = [];

    ngAfterViewInit(): void {
      this._authLogin.currentUser$.subscribe((user) => {
        this.usuario = user;
      });

  }

  enviarMensagem(mensagem: string) {
    // this.mensagens.push(mensagem)
    // console.log('MENSAGENS', this.mensagens);
        if (!this.formChat.controls['mensagem'].value!.trim()) return;
    this.chat.enviarMensagem(this.formChat.controls['mensagem'].value!, this.usuario?.uid!);
    this.formChat.controls['mensagem'].setValue('');
  }
}
