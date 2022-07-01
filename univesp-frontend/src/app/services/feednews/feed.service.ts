import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const API = environment.apiLocal
// const API = environment.apiASP

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(    
    private httpClient: HttpClient
    ) { }

  Get(params: any): Observable<any>{
    return this.httpClient
    .get(`${API}${params.url}?_sort=id&_order=desc`)
  }

  Put(params: any){
    return this.httpClient
    .put(`${API}${params.url}`, params.body)
  }

  Post(params: any){
    return this.httpClient
    .post(`${API}${params.url}`, params.body)
  }

  Delete(params: any){
    return this.httpClient
    .delete(`${API}${params.url}/${params.body}`)
  }
}