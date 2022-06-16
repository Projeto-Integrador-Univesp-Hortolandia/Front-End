import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

import { Noticia } from '../../shared/components/models/noticia';
import { NoticiasService } from '../service-noticias/noticias.service';
import { Alert } from '../../shared/components/models/alert';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-noticias-update',
  templateUrl: './noticias-update.component.html',
  styleUrls: ['./noticias-update.component.scss']
})
export class NoticiasUpdateComponent implements OnInit {

  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  noticia!: Noticia;
  id!: number;

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  editar(): void {
    this.router.navigateByUrl('/noticias/cadastro/'+this.id);
  }

  excluir(): void {
    const config = {
      data: {
        titulo: 'Você tem certeza que deseja excluir?',
        descricao: 'Caso você tenha certceza que deseja excluir, clique no botão OK',
        corBtnCancelar: 'primary',
        corBtnSucesso: 'warn',
        possuirBtnFechar: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.noticiasService.excluir(this.id)
        .subscribe(() => this.router.navigateByUrl('/noticias'));
      }
    });
  }

  private visualizar(): void {
    this.noticiasService.visualizar(this.id).subscribe((noticia: Noticia) => this.noticia = noticia);
  }

}
