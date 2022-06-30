import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ValidateFieldsService } from '../../../shared/components/fields/validate-fields.service';
import { Noticia } from '../../../shared/models/noticia';
import { NoticiasService } from '../services/noticias.service';
import { Alert } from '../../../shared/models/alert';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-aviso-create',
  templateUrl: './aviso-create.component.html',
  styleUrls: ['./aviso-create.component.scss']
})
export class AvisoCreateComponent implements OnInit {

  id!: number;
  cadastro!: FormGroup;
  //generos!: Array<string>;

  title = 'adminDashboard';

    constructor(public validacao: ValidateFieldsService,
                public dialog: MatDialog,
                private fb: FormBuilder,
                private noticiaService: NoticiasService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private http: HttpClient) {}


    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      if (this.id) {
        this.noticiaService.visualizar(this.id)
          .subscribe((noticia: Noticia) => this.criarFormulario(noticia));
      } else {
        this.criarFormulario(this.criarnoticiaEmBranco());
      }
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
        nome: [noticia.nome, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
        urlFoto: [noticia.urlFoto, [Validators.minLength(10)]],
        dtLancamento: [noticia.dtLancamento, [Validators.required]],
        descricao: [noticia.descricao]
      });
      console.log(noticia.nome);
    }

    private criarnoticiaEmBranco(): Noticia {
      return {
        id: null,
        nome: null,
        dtLancamento: null,
        urlFoto: null,
        descricao: null
      } as unknown as Noticia;
    }

    private salvar(noticia: Noticia): void {
      this.noticiaService.salvar(noticia).subscribe(() => {
        const config = {
          data: {
            btnSucesso: 'Ir para a listagem',
            btnCancelar: 'Cadastrar uma nova noticia',
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
