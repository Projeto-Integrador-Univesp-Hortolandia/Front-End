import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
import { Noticia } from '../../shared/components/models/noticia';
import { NoticiasService } from '../service-noticias/noticias.service';
import { Alert } from '../../shared/components/models/alert';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-noticias-create',
  templateUrl: './noticias-create.component.html',
  styleUrls: ['./noticias-create.component.scss']
})
export class NoticiasCreateComponent implements OnInit {

id!: number;
cadastro!: FormGroup;
generos!: Array<string>;

//  id: number = 0;
//  cadastro: any = FormGroup;
//  generos: Array<string> = [];

  constructor(public validacao: ValidateFieldsService,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private noticiaService: NoticiasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.noticiaService.visualizar(this.id)
        .subscribe((noticia: Noticia) => this.criarFormulario(noticia));
    } else {
      this.criarFormulario(this.criarnoticiaEmBranco());
    }

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }

    const noticia = this.cadastro.getRawValue() as Noticia;
    if (this.id) {
      noticia.id = this.id;
      this.editar(noticia);
    } else {
      this.salvar(noticia);
    }
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  private criarFormulario(noticia: Noticia): void {
    this.cadastro = this.fb.group({
      titulo: [noticia.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: [noticia.urlFoto, [Validators.minLength(10)]],
      dtLancamento: [noticia.dtLancamento, [Validators.required]],
      descricao: [noticia.descricao],
      nota: [noticia.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [noticia.urlIMDb, [Validators.minLength(10)]],
      genero: [noticia.genero, [Validators.required]]
    });
    console.log(noticia.titulo);
  }

  private criarnoticiaEmBranco(): Noticia {
    return {
      id: null,
      titulo: null,
      dtLancamento: null,
      urlFoto: null,
      descricao: null,
      nota: null,
      urlImdb: null,
      genero: null
    } as unknown as Noticia;
  }

  private salvar(noticia: Noticia): void {
    this.noticiaService.salvar(noticia).subscribe(() => {
      const config = {
        data: {
          btnSucesso: 'Ir para a listagem',
          btnCancelar: 'Cadastrar um novo noticia',
          corBtnCancelar: 'primary',
          possuirBtnFechar: true
        } as Alert
      };
      const dialogRef = this.dialog.open(AlertComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigateByUrl('/noticias');
        } else {
          this.reiniciarForm();
        }
      });
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar o registro!',
          descricao: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alert
      };
      this.dialog.open(AlertComponent, config);
    });
  }

  private editar(noticia: Noticia): void {
    this.noticiaService.editar(noticia).subscribe(() => {
      const config = {
        data: {
          descricao: 'Seu registro foi atualizado com sucesso!',
          btnSucesso: 'Ir para a listagem',
        } as Alert
      };
      const dialogRef = this.dialog.open(AlertComponent, config);
      dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('noticias'));
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao editar o registro!',
          descricao: 'Não conseguimos editar seu registro, favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alert
      };
      this.dialog.open(AlertComponent, config);
    });
  }
}
