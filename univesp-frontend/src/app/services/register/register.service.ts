import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// const API = environment.apiLocal
const API = environment.apiASP

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  Get(params: any): Observable<any>{
    return this.httpClient
    .get<any>(`${API}${params.url}`)
  }

  Put(params: any){
    return this.httpClient
    .put<any>(`${API}${params.url}`, params.body)
  }

  Post(params: any){
    return this.httpClient
    .post<any>(`${API}${params.url}`, params.body)
  }

  Delete(params: any){
    return this.httpClient
    .delete<any>(`${API}${params.url}/${params.body}`)
  }


  getThrowError(error: HttpErrorResponse): string{

    switch (error.status){
      case 404: {
        return 'Conteúdo não encontrado';
      }
      case 403: {
        return 'Acesso não autorizado';
      }
      case 500: {
        return 'Erro interno';
      }
      default: {
        return `${error.message}`
      }
    }

  }

}
