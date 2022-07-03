import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiASP

export interface loginBody{
  Email: string,
  Senha: string,
  Nome: string | null
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public httpClient: HttpClient
  ) { }


  login(body: any){
    return this.httpClient.post(`${API}Login`, body, { observe: 'response' })
  }

  returnPermission(){
    if (localStorage.getItem('isAdmin') === 'true'){

      return true
    }
    else {

      return false
    }
  }

  savePermission(value: any){
    let v = value ? 'true' : 'false'
    localStorage.setItem('isAdmin', v)
  }

  deletePermission(){
    localStorage.removeItem('isAdmin')
  }


  getUserInfo(){
    const userInfo = localStorage.getItem('userInfos') ?? ''
    return JSON.parse(userInfo)
  }

  Setlogin(){
    localStorage.setItem('logged', 'true')
  }

  isLogged(){
    if (localStorage.getItem('logged') === 'true'){

      return true
    }
    else {

      return false
    }
  }

  logout(){
    localStorage.removeItem('userInfos')
    localStorage.removeItem('logged')
    this.deletePermission()
  }
}
