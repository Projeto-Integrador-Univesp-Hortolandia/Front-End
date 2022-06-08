import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
//import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';

import { Messenger } from 'src/app/shared/components/models/messenger';
//import { Filme } from 'src/app/shared/components/models/filme';

import { MessengersService } from 'src/app/shared/components/service/messengers.service';
//import { FilmesService } from '../core/filmes.service';

import { Alert } from 'src/app/shared/components/models/alert';
//import { Alerta } from 'src/app/shared/models/alerta';

import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
//import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';


@Component({
  selector: 'app-register-messenger',
  templateUrl: './register-messenger.component.html',
  styleUrls: ['./register-messenger.component.scss']
})
export class RegisterMessengerComponent implements OnInit {

  //id!: number;
  //cadastro!: FormGroup;
  //generos!: Array<string>;

  id: number = 0;
  cadastro: any = FormGroup;
  generos: Array<string> = [];

  constructor(public validacao: ValidateFieldsService,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private filmeService: MessengersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.filmeService.visualizar(this.id)
        .subscribe((filme: Messenger) => this.criarFormulario(filme));
    } else {
      this.criarFormulario(this.criarFilmeEmBranco());
    }

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }

    const filme = this.cadastro.getRawValue() as Messenger;
    if (this.id) {
      filme.id = this.id;
      this.editar(filme);
    } else {
      this.salvar(filme);
    }
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  private criarFormulario(filme: Messenger): void {
    this.cadastro = this.fb.group({
      titulo: [filme.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: [filme.urlFoto, [Validators.minLength(10)]],
      dtLancamento: [filme.dtLancamento, [Validators.required]],
      descricao: [filme.descricao],
      nota: [filme.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: [filme.urlIMDb, [Validators.minLength(10)]],
      genero: [filme.genero, [Validators.required]]
    });
    console.log(filme.titulo);
  }

  private criarFilmeEmBranco(): Messenger {
    return {
      id: null,
      titulo: null,
      dtLancamento: null,
      urlFoto: null,
      descricao: null,
      nota: null,
      urlImdb: null,
      genero: null
    } as unknown as Messenger;
  }

  private salvar(filme: Messenger): void {
    this.filmeService.salvar(filme).subscribe(() => {
      const config = {
        data: {
          btnSucesso: 'Ir para a listagem',
          btnCancelar: 'Cadastrar um novo filme',
          corBtnCancelar: 'primary',
          possuirBtnFechar: true
        } as Alert
      };
      const dialogRef = this.dialog.open(AlertComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigateByUrl('filmes');
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

  private editar(filme: Messenger): void {
    this.filmeService.editar(filme).subscribe(() => {
      const config = {
        data: {
          descricao: 'Seu registro foi atualizado com sucesso!',
          btnSucesso: 'Ir para a listagem',
        } as Alert
      };
      const dialogRef = this.dialog.open(AlertComponent, config);
      dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('filmes'));
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
