import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiLocal

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public httpClient: HttpClient
  ) { }


  login(){
    return this.httpClient.get(`${API}`)

  }
}
