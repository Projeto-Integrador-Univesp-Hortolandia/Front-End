import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { ConfigPrams } from 'src/app/shared/components/models/config-prams';

import { Messenger } from 'src/app/shared/components/models/messenger';
//import { Filme } from 'src/app/shared/components/models/filme';

import { MessengersService } from 'src/app/shared/components/service/messengers.service';
//import { FilmesService } from 'src/app/shared/components/service/core/filmes.service';


@Component({
  selector: 'app-list-messenger',
  templateUrl: './list-messenger.component.html',
  styleUrls: ['./list-messenger.component.scss']
})


export class ListMessengerComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigPrams = {
    pagina: 0,
    limite: 4
  };
  filmes: Messenger[] = [];
  filtrosListagem: any = FormGroup;
  generos: Array<string> = [];

  constructor(private filmesService: MessengersService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.filtrosListagem.get('texto').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.pesquisa = val;
      this.resetarConsulta();
    });

    this.filtrosListagem.get('genero').valueChanges.subscribe((val: string) => {
      this.config.campo = {tipo: 'genero', valor: val};
      this.resetarConsulta();
    });

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  abrir(id: number): void {
    this.router.navigateByUrl('/filmes/' + id);
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmesService.listar(this.config)
      .subscribe((filmes: Messenger[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}

