import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing-module';
import { Chat } from './chat';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { BalaoChat } from './components/balao-chat/balao-chat';


@NgModule({
  declarations: [
    Chat,
    BalaoChat
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule
  ]
})
export class ChatModule { }
