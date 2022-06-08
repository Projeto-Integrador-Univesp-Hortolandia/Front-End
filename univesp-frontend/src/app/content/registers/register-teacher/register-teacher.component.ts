import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  constructor(
    @Inject (MAT_DIALOG_DATA) public dialogData: any,
    public DialogRef: MatDialogRef<any>,
    public registerService: RegisterService,
    public matSnackbar: MatSnackBar
  ) { }

  studentsList = [] as any[]

  options: string[] = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4'];
  filteredOptions!: Observable<string[]>;

  myControl = new FormControl('');

  _form = new FormGroup({
    Nome: new FormControl(''),
    Email: new FormControl(''),
    Senha: new FormControl(''),
    CPF: new FormControl(''),
    DataNasc: new FormControl(''),
    NumRegistro: new FormControl('')
  })

  ngOnInit(): void {
    this.getStudents(this.dialogData)

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  getStudents(idGroup: number){

    this.registerService.Get({ url: `students?Group=${2}`}).subscribe(
      (success: any) => {
        this.studentsList = success
      }
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
