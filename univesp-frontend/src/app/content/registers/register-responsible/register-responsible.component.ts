import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-responsible',
  templateUrl: './register-responsible.component.html',
  styleUrls: ['./register-responsible.component.scss']
})
export class RegisterResponsibleComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public dialogData: any,
    public DialogRef: MatDialogRef<any>,
    public registerService: RegisterService,
    public matSnackbar: MatSnackBar
  ) { }

  studentsList = [] as any[]

  _form = new FormGroup({
    Nome: new FormControl(''),
    CPF: new FormControl(''),
    DataNasc: new FormControl(''),
    Observacoes: new FormControl('')
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
}
