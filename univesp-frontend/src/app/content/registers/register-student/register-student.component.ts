import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { forkJoin, merge, Observable, of } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';
import { Groups } from 'src/app/shared/models/groups';
import { MatSelectChange } from '@angular/material/select';

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
  allGroups$ = this.registerService.Get({ url: 'Turmas' })
  filterGroups$ = this.myControl.valueChanges
  .pipe(
    debounceTime(300),
    switchMap(
      student => this.registerService.Get
      ({
        url: `Turmas`
      })
    )
  )

  groups$ = merge(this.allGroups$, this.filterGroups$)

  _form = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    observacoes: new FormControl('')
  })

  groupsSelect = new FormControl('', Validators.required)
  responsibleSelect = new FormControl('', Validators.required)

  allGroups: any
  allResposibles: any

  listGroup: any = []
  listResposibles: any = []

  ngOnInit(): void {

    if (this.dialogData.type === 'edit'){

      this.registerService.Get({ url: `Alunoes/${this.dialogData.id}` })
        .subscribe(
          (success: any) => {
            this._form.patchValue(success)

            forkJoin({

              groupsList: this.registerService.Get(
                { url: 'Turmas' }
              )
              .pipe(
                catchError( error => {
                  return of(null);
                })
              ),
        
              responsiblesList: this.registerService.Get(
                { url: 'Responsavels' }
              )
              .pipe(
                catchError( error => {
                  return of(null);
                })
              ),
        
              groups: this.registerService.Get(
                { url: `Turmas/${this.dialogData.turma}` }
              )
              .pipe(
                catchError( error => {
                  return of(null);
                })
              ),
        
              responsibles: this.registerService.Get(
                { url: `Responsavels/${this.dialogData.responsavelId}` }
              )
              .pipe(
                catchError( error => {
                  return of(null);
                })
              ),
        
            }).subscribe( response => {
        
              let { groupsList, responsiblesList, groups, responsibles } = response
        
              this.allGroups = [...groupsList];
              this.allResposibles = [...responsiblesList];
              this.listGroup.push(groups);
              this.listResposibles.push(responsibles)
        
            } )
          }
        )
    } 

    else {
      forkJoin({

        groupsList: this.registerService.Get(
          { url: 'Turmas' }
        )
        .pipe(
          catchError( error => {
            return of(null);
          })
        ),
  
        responsiblesList: this.registerService.Get(
          { url: 'Responsavels' }
        )
        .pipe(
          catchError( error => {
            return of(null);
          })
        ),
  
      }).subscribe( response => {
  
        let { groupsList, responsiblesList } = response
  
        this.allGroups = [...groupsList];
        this.allResposibles = [...responsiblesList];
  
      } )
    }
  }

  postStudent(){

    let obj = {
      ...this._form.value,
      responsavelId: this.listResposibles[0].id,
      turma: this.listGroup[0].id
    }

    console.log(this.listResposibles[0])
    console.log(this.listGroup[0])

    this.registerService.Post({
      url: 'Alunoes',
      body: obj
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

    let obj = {
      ...this._form.value,
      responsavelId: this.listResposibles[0].id,
      turma: this.listGroup[0].id
    }

    this.registerService.Put({
      url: `Alunoes/${this.dialogData.id}`,
      body: obj
    }).subscribe(
      (success: any) => {
        this.matSnackbar.open('Cadastro realizado com sucesso', 'Fechar', {duration: 1500})
      }, 
      error => {
        this.matSnackbar.open('Ocorreu um erro ao tentar salvar', 'Fechar', {duration: 2500})
      }
    )
  }

  addToGroup(value: MatSelectChange){
    if (value.value){

      if (this.listGroup.length >= 1){
        this.matSnackbar.open('Somente uma turma por aluno.')
      }
      else{
        this.listGroup.push(value.value)
      }
    }
  }

  removeGroup(group: Groups){
    let index = this.listGroup.indexOf(group)

    if (index){
      this.listGroup.splice(index, 1)
    }
  }

  addResponsible(value: MatSelectChange){
    if (value.value){
      if (this.listResposibles.length >= 1){
        this.matSnackbar.open('Somente um responsável por aluno.')
      }
      else{
        this.listResposibles.push(value.value)
      }
    }
  }

  removeResponsible(responsible: any){
    let index = this.listGroup.indexOf(responsible)

    if (index){
      this.listResposibles.splice(index, 1)
    }
  }
}
