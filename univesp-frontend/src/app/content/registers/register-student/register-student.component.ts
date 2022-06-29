import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';
import { Groups } from 'src/app/shared/models/groups';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public dialogData: any,
    public DialogRef: MatDialogRef<any>,
    public registerService: RegisterService,
    public matSnackbar: MatSnackBar
  ) { }

  groupsList = [] as any[]

  myControl = new FormControl('');
  allGroups$ = this.registerService.Get({ url: 'Aluno' })
  filterGroups$ = this.myControl.valueChanges
  .pipe(
    debounceTime(300),
    switchMap(
      student => this.registerService.Get
      ({
        url: `Aluno?Nome=${student}`
      })
    )
  )

  groups$ = merge(this.allGroups$, this.filterGroups$)

  _form = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataNasc: new FormControl(''),
    observacao: new FormControl('')
  })

  ngOnInit(): void {

    if (this.dialogData.type === 'edit'){

      this.registerService.Get({ url: `Aluno/${this.dialogData.id}` })
        .subscribe(
          (success: any) => {
            this._form.patchValue(success)
          }
        )

    } 
  }

  postStudent(){
    this.registerService.Post({
      url: 'aluno',
      body: this._form.value
    }).subscribe(
      (success: any) => {
        this.matSnackbar.open('Cadastro realizado com sucesso', 'Fechar', {duration: 1500})
      }, 
      error => {
        this.matSnackbar.open('Ocorreu um erro ao tentar salvar', 'Fechar', {duration: 2500})
      }
    )
  }

  putStudent(){
    this.registerService.Put({
      url: `aluno/${this.dialogData.id}`,
      body: this._form.value
    }).subscribe(
      (success: any) => {
        this.matSnackbar.open('Cadastro realizado com sucesso', 'Fechar', {duration: 1500})
      }, 
      error => {
        this.matSnackbar.open('Ocorreu um erro ao tentar salvar', 'Fechar', {duration: 2500})
      }
    )
  }

  addToGroup(group: Groups){
    if (group){
      this.groupsList.push(group)
    }
  }

  removeGroup(group: Groups){
    let index = this.groupsList.indexOf(group)

    if (index){
      this.groupsList.splice(index, 1)
    }
  }
}
