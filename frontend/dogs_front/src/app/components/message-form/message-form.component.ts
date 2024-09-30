import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class MessageFormComponent {
  messageText: string = '';
  recipientId: number | null = null;
  
  constructor(private apiService: ApiService) {}

  sendMessage() {
    const messageData = {
      text: this.messageText,
      recipient: this.recipientId,
    };
    
    this.apiService.sendMessage(messageData).subscribe(response => {
      console.log('Message sent:', response);
      this.messageText = ''; // Очистка поля ввода после отправки сообщения
      // this.recipientId = null; 
    });
  }
}