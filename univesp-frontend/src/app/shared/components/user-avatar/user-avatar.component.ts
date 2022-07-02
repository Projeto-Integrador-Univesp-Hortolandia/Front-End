import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAvatarComponent implements OnInit {

  user: string | null = ''

  constructor(
    public router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('nome')
  }

  logout(){
    
    this.loginService.logout()
    this.loginService.deletePermission()
    this.router.navigateByUrl('/login')

  }

}
