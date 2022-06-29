import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiLocal

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public httpClient: HttpClient
  ) { }

    chats: any = []

  getAllChats(){
    return this.httpClient.get(`${API}Chat`)
  }

  createChat(idChat: number){
    return this.httpClient.get(`${API}Messages/${idChat}`)
  }

  getMessages(idChat: number){
    return this.httpClient.get(`${API}Messages/${idChat}`)
  }

  sendMessage(body: any){
    return this.httpClient.put(`${API}Messages/${body.idChat}`, body.content)
  }

  updateChat(body: any){
    return this.httpClient.put(`${API}chat/${body.idChat}`, body.content)
  }
}
