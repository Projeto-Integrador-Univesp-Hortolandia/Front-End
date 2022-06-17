import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigParams } from '../../shared/components/models/config-params';
import { ConfigParamsService } from './config-params.service';

import { Noticia } from '../../shared/components/models/noticia';
import { NoticiasComponent } from '../noticias/noticias.component';

const url = 'http://localhost:3000/noticias/';

@Injectable({
  providedIn: 'root'
              //NoticiasComponent
})
export class NoticiasService {

  constructor(private http: HttpClient,
    private configService: ConfigParamsService) { }

  salvar(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(url, noticia);
  }

  editar(noticia: Noticia): Observable<Noticia> {
    return this.http.put<Noticia>(url + noticia.id, noticia);
  }

  listar(config: ConfigParams): Observable<Noticia[]> {
    const configParams = this.configService.configurarParametros(config);
    return this.http.get<Noticia[]>(url, {params: configParams});
  }

  visualizar(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
