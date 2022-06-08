import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigPrams } from '../models/config-prams';
import { ConfigParamsService } from './config-params.service';

import { Messenger } from '../models/messenger';
import { MessegerModule } from 'src/app/messeger/messeger.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';


const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: NavBarModule  //'root'
})
export class MessengersService {

  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  salvar(filme: Messenger): Observable<Messenger> {
    return this.http.post<Messenger>(url, filme);
  }

  editar(filme: Messenger): Observable<Messenger> {
    return this.http.put<Messenger>(url + filme.id, filme);
  }

  listar(config: ConfigPrams): Observable<Messenger[]> {
    const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Messenger[]>(url, {params: configPrams});
  }

  visualizar(id: number): Observable<Messenger> {
    return this.http.get<Messenger>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}

