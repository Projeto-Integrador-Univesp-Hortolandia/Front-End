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
    Login: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this._formLogin.reset()
  }

  login(){
    this.router.navigateByUrl('/home')
  }

}
