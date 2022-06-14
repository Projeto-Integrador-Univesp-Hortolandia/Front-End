import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-group',
  templateUrl: './register-group.component.html',
  styleUrls: ['./register-group.component.scss']
})
export class RegisterGroupComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public dialogData: any,
    public DialogRef: MatDialogRef<any>,
    public registerService: RegisterService,
    public matSnackbar: MatSnackBar
  ) { }

  studentsList = [] as any[]

  _form = new FormGroup({
    Nome: new FormControl(''),
    Ano: new FormControl(''),
    Turma: new FormControl(''),
    Periodo: new FormControl(''),
    Sala: new FormControl('')
  })

  ngOnInit(): void {
    this.getStudents(this.dialogData)

  }

  getStudents(idGroup: number){

    this.registerService.Get({ url: `students?Group=${2}`}).subscribe(
      (success: any) => {
        this.studentsList = success
      }
    )

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
  

}
