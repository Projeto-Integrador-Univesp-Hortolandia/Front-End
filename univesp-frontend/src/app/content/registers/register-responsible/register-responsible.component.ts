import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { merge, Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { RegisterService } from 'src/app/services/register/register.service';
import { Responsibles } from 'src/app/shared/models/groups';

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

  childrenList = [] as any[]
  filteredOptions!: Observable<string[]>;

  myControl = new FormControl('');
  allChildren$ = this.registerService.Get({ url: 'students' })
  filterChildren$ = this.myControl.valueChanges
  .pipe(
    debounceTime(300),
    switchMap(
      student => this.registerService.Get
      ({
        url: `students?Nome=${student}`
      })
    )
  )

  childrens$ = merge(this.allChildren$, this.filterChildren$)


  _form = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    observacao: new FormControl('')
  })

  ngOnInit(): void {
    if(this.dialogData.type === 'edit'){
      
      this.registerService.Get({ url: `Responsavels/${this.dialogData.id}`}).subscribe(
        (success: any) => {
          this._form.patchValue(success)
        }
      )

    }

  }

  addToGroup(group: Responsibles){
    if (group){
      this.childrenList.push(group)
    }
  }

  removeGroup(group: Responsibles){
    let index = this.childrenList.indexOf(group)

    if (index){
      this.childrenList.splice(index, 1)
    }
  }

  registerResponsible(){

    this.registerService.Post
      ({
        url: `Responsavels`,
        body: this._form.value 
      })
      .subscribe(
        (success: any) => {
          this.matSnackbar
            .open('Responsável registrado com sucesso', 'Fechar', { duration: 1500 })
            .afterDismissed()
            .subscribe(
              () => this.DialogRef.close(true)
            )
        }, error => {
          this.matSnackbar.open('Ocorreu um erro ao tentar registrar', 'Fechar', { duration: 2500 })
        }
      )
  }

  putResponsible(){
    this.registerService.Put({
      url: `Responsavels/${this.dialogData.id}`,
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
