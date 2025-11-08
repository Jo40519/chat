import { Component, inject, Input, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service';

@Component({
  selector: 'app-balao-chat',
  standalone: false,
  templateUrl: './balao-chat.html',
  styleUrl: './balao-chat.scss',
})
export class BalaoChat implements OnInit {

    private readonly _chatService = inject(ChatService);
  @Input() conversaId!: string;
  @Input({required: true}) mensagens!: Array<any>

  ngOnInit(): void {
    this._chatService.getMensagens().subscribe((mensagens) => {
      console.log('Mensagens da conversa', mensagens);
      this.mensagens = mensagens;
    });
  }
}
