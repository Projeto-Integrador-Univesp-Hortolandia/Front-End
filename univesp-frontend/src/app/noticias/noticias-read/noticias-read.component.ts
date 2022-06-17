import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ConfigParams } from 'src/app/shared/components/models/config-params';
import { Noticia } from '../../shared/components/models/noticia';
import { NoticiasService } from '../service-noticias/noticias.service';

@Component({
  selector: 'app-noticias-read',
  templateUrl: './noticias-read.component.html',
  styleUrls: ['./noticias-read.component.scss']
})

export class NoticiasReadComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigParams = {
    pagina: 0,
    limite: 4
  };
  noticias: Noticia[] = [];
  filtrosListagem: any = FormGroup;
  generos: Array<string> = [];

  constructor(private noticiasService: NoticiasService,
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

    this.listarNoticias();
  }

  onScroll(): void {
    this.listarNoticias();
  }

  abrir(id: number): void {
    this.router.navigateByUrl('/noticias/' + id);
  }

  private listarNoticias(): void {
    this.config.pagina++;
    this.noticiasService.listar(this.config)
      .subscribe((noticias: Noticia[]) => this.noticias.push(...noticias));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.noticias = [];
    this.listarNoticias();
  }
}
