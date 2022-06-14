import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { merge, Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register/register.service';
import { Groups } from 'src/app/shared/models/groups';

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
  ) {
 
    }

  groupsList = [] as any[]
  filteredOptions!: Observable<string[]>;

  myControl = new FormControl('');
  allGroups$ = this.registerService.Get({ url: 'groups' })
  filterGroups$ = this.myControl.valueChanges
  .pipe(
    debounceTime(300),
    switchMap(
      student => this.registerService.Get
      ({
        url: `groups?Nome=${student}`
      })
    )
  )

  groups$ = merge(this.allGroups$, this.filterGroups$)

  _form = new FormGroup({
    Nome: new FormControl(''),
    Email: new FormControl(''),
    Senha: new FormControl(''),
    CPF: new FormControl(''),
    DataNasc: new FormControl(''),
    NumRegistro: new FormControl('')
  })

  ngOnInit(): void {

    if(this.dialogData.type === 'edit'){
      
      this.registerService.Get({ url: `teachers?id=${this.dialogData.id}`}).subscribe(
        (success: any) => {
          this._form.patchValue(success[0])
        }
      )

    }
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

  registerTeacher(){

    this.registerService.Post
      ({
        url: `teachers`,
        body: this._form.value 
      })
      .subscribe(
        (success: any) => {
          this.matSnackbar
            .open('Professor registrado com sucesso', 'Fechar', { duration: 1500 })
            .afterDismissed()
            .subscribe(
              () => this.DialogRef.close(true)
            )
        }, error => {
          this.matSnackbar.open('Ocorreu um erro ao tentar registrar', 'Fechar', { duration: 2500 })
        }
      )
  }

  putTeacher(){
    this.registerService.Put({
      url: `teachers/${this.dialogData.id}`,
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
