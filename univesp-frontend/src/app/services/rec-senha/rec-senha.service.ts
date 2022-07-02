import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

  const API = environment.apiASP

@Injectable({
  providedIn: 'root'
})
export class RecSenhaService {

  constructor(
    private httpClient: HttpClient
  ) { }


    getRegister(value: any){
      return this.httpClient.get(`${API}forgotPassword/${value}`)
    }

    
}
