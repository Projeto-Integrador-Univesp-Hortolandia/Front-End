import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public matSnackbar: MatSnackBar,
    public router: Router
  ) { }

  _formLogin: FormGroup = new FormGroup({
    Usuario: new FormControl('', Validators.required),
    Senha: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this._formLogin.reset()
  }

  login(){

    let login = {
      ...this._formLogin.value,
    }

    this.loginService.login(login)
      .subscribe(
        (success: any) => {

          const { status, body } = success

          if (status === 200){
            this.router.navigate(['home'])
            
            this.loginService.Setlogin()
            this.loginService.savePermission(body.isAdmin)

            localStorage.setItem('nome', body.nome)
          }

          else {
            this.matSnackbar.open('Usuario não encontrado', '', { duration: 2000 })
          }


        },
        erro => {
          this.matSnackbar.open('Usuario não encontrado', '', { duration: 2000 })
        }
      )




  }

}
