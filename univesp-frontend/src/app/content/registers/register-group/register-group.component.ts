import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register/register.service';
import { Groups } from 'src/app/shared/models/groups';
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

  studentsList = [] as Student[]

  _form = new FormGroup({
    Nome: new FormControl(''),
    Ano: new FormControl(''),
    Turma: new FormControl(''),
    Periodo: new FormControl(''),
    Sala: new FormControl('')
  })

  ngOnInit(): void {

    if (this.dialogData.type === 'edit'){

      forkJoin({
        group: this.registerService
            .Get({
              url: `groups?id=${this.dialogData.id}`
            })
            .pipe(
              catchError(error => {
                return of(null);
              })
            ),
        students: this.registerService
            .Get({
              url: `students?Group=${this.dialogData.id}`
            })
            .pipe(
              catchError(error => {
                return of(null);
              })
            )
      })
      .subscribe(success => {
        let { group, students } = success

        this._form.patchValue(group[0])
        this.studentsList = students
      })

    }

    else {
      
    }
  }

  registerGroup(){
    this.registerService.Post({ url: 'groups', body: this._form.value }).subscribe(
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
      url: `groups/${this.dialogData.id}`,
      body: this._form.value
    })
    .subscribe(
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

}
