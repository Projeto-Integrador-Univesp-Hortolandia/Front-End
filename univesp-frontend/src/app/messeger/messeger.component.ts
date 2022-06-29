import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-messeger',
  templateUrl: './messeger.component.html',
  styleUrls: ['./messeger.component.scss']
})
export class MessegerComponent implements OnInit {

  constructor(
    public chatService: ChatService,
    public matSnackBar: MatSnackBar
  ) { }

  chats: any = []
  chat: any = []

  sendInput = new FormControl('', Validators.required)

  ngOnInit(): void {

    this.getAllChats()

  }

  getAllChats(){

    this.chatService.getAllChats()
      .subscribe(
        (success: any) => {
          this.chats = success
        }
      )
  }

  getMessages(idchat: number){

    this.chatService.getMessages(idchat)
      .subscribe(
        (success: any) => {
          this.chat = success
          
        }
      )
  }

  sendMessage(){

    if(this.sendInput.valid){
      let obj = {
        from: 1,
        message: this.sendInput.value
      }
  
      this.chat.messages.push(obj)
  
      this.chatService.sendMessage({ idChat: this.chat.id, content: this.chat })
        .subscribe(
          (sucess: any) => {
            this.sendInput.reset()
          },
          error => {
            this.matSnackBar.open('Ocorreu um erro ao tentar enviar mensagem. Tente novamente', '', { duration: 2500})
          }
        )
    }
  }


}
