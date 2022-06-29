import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, of } from 'rxjs';
import { merge, Observable } from 'rxjs';
import { catchError, debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register/register.service';
import { Groups, Students } from 'src/app/shared/models/groups';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public dialogData: any,
    public DialogRef: MatDialogRef<Groups>,
    public registerService: RegisterService,
    public matSnackbar: MatSnackBar
  ) { }

  studentsList = [] as any[]
  filteredOptions!: Observable<string[]>;

  myControl = new FormControl('');
  allStudents$ = this.registerService.Get({ url: 'Turma' })
  filterStudents$ = this.myControl.valueChanges
  .pipe(
    debounceTime(300),
    switchMap(
      student => this.registerService.Get
      ({
        url: `Turma?Nome=${student}`
      })
    )
  )

  students$ = merge(this.allStudents$, this.filterStudents$)

  _form = new FormGroup({
    nome: new FormControl(''),
    ano: new FormControl(''),
    turma: new FormControl(''),
    periodo: new FormControl(''),
    sala: new FormControl('')
  })

  ngOnInit(): void {

    console.log(this.dialogData.id)

    if (this.dialogData.type === 'edit'){

      forkJoin({
        group: this.registerService
            .Get({
              url: `Turma/${this.dialogData.id}`
            })
            .pipe(
              catchError(error => {
                return of(null);
              })
            ),
        students: this.registerService
            .Get({
              url: `Aluno?id=${this.dialogData.id}`
            })
            .pipe(
              catchError(error => {
                return of(null);
              })
            )
      })
      .subscribe(success => {
        let { group, students } = success

        this._form.patchValue(group)
        this.studentsList = students
      })

    }

    else {
      
    }
  }

  addToGroup(group: Students){
    if (group){
      this.studentsList.push(group)
    }
  }

  removeGroup(group: Students){
    let index = this.studentsList.indexOf(group)

    if (index){
      this.studentsList.splice(index, 1)
    }
  }

  registerGroup(){

    this.registerService.Post({ url: 'Turma', body: this._form.value }).subscribe(
      (success: any) => {
        this.matSnackbar
          .open('Grupo registrado com sucesso', 'Fechar', { duration: 1500 })
          .afterDismissed()
          .subscribe(
            () => this.DialogRef.close(true)
          )
      }, error => {
        this.matSnackbar.open('Ocorreu um erro. Tente novamente', 'Fechar', { duration: 2000 })
      }
    )
  }
  
  putGroup(){
    this.registerService.Put({
      url: `Turma/${this.dialogData.id}`,
      body: this._form.value
    })
    .subscribe(
      (success: any) => {

        this.matSnackbar
        .open('Alterações salvas com sucesso', 'Fechar', { duration: 1500 })
        .afterDismissed()
        .subscribe(
          () => this.DialogRef.close(true)
        )

      }, error => {

        this.matSnackbar.open('Ocorreu um erro. Tente novamente', 'Fechar', { duration: 2000 })

      }
    )
  }

}
