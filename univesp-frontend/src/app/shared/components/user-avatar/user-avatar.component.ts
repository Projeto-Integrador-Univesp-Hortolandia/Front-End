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

  constructor(
    public router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    
    this.loginService.logout()
    this.loginService.deletePermission()
    this.router.navigateByUrl('/login')

  }

}
