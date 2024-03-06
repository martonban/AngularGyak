import { Component } from '@angular/core';
import { Message } from '../chat.models';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [
    {role: 'assistant', content: "Szevasz!"},
    {role: 'user', content: "Szevasz! Hány óra van?"},
    {role: 'assistant', content: "7 óra van"},
    {role: 'user', content: "Kösz Tesa"},
    {role: 'assistant', content: "Szívesen Tesa"},
  ];
}
