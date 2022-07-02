import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecSenhaService } from 'src/app/services/rec-senha/rec-senha.service';

@Component({
  templateUrl: './rec-senha.component.html',
  styleUrls: ['./rec-senha.component.scss'],
  animations: [
		trigger('changeAnim', [
			state(
				'open',
				style({
					transform: 'translateX(0px)',
          opacity: 1
				})
			),
			state(
				'void',
				style({
					display: 'none',
					transform: 'translateX(-150%)',
          opacity: 0
				})
			),
			transition('open => void', [
				animate(
					'250ms ease-out',
					keyframes([
						style({ position: 'absolute' }),
						style({ transform: 'translateX(100%)', opacity: 1 })
					])
				)
			]),
			transition('void => *', [
				animate(
					'250ms 250ms ease-out',
					keyframes([
						style({
							display: 'grid',
							transform: 'translateX(-150%)',
							opacity: 0
						}),
						style({ transform: 'translateX(0px)', opacity: 1 })
					])
				)
			])
		])
	]
})
export class RecSenhaComponent implements OnInit {

  constructor(
	private recSenhaService: RecSenhaService,
	private matSnackbar: MatSnackBar
  ) { }

  _formRecSenha: FormGroup = new FormGroup({
    cpf: new FormControl('', Validators.required),
  })

  _password = new FormControl()
  _confPassword = new FormControl()

  step: number = 1


  ngOnInit(): void {

  }

  getCPF(){
	this.step = 2

	// this.recSenhaService.getRegister(this._formRecSenha.value)
	// 	.subscribe(
	// 		(success: any) => {
	// 			this.step = 2
	// 		},
	// 		error => {
	// 			this.matSnackbar.open(
	// 				'Registro não encontrado',
	// 				'Fechar',
	// 				{ duration: 2500 }
	// 			)
	// 		}
	// 	)
  }

  validatePassword(){    
    return this._password.value != this._confPassword.value
  }

  validadeLength(){
    if(this._password.value){
      return this._password.value.length < 4
    }
    return true
  }

  updatePassword(){

  }

}
