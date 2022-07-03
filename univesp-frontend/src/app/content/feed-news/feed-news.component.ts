import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { FeedService } from 'src/app/services/feednews/feed.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ContentCreatorComponent } from './content-creator/content-creator.component';

@Component({
  selector: 'app-feed-news',
  templateUrl: './feed-news.component.html',
  styleUrls: ['./feed-news.component.scss']
})
export class FeedNewsComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private feedService: FeedService,
    private loginService: LoginService
  ) { }

  posts: any = []

  ngOnInit(): void {
    moment.locale('pt-br');
    
    this.getContent()
  }

  getContent(){
    this.feedService.Get({ url: 'Posts' })
      .subscribe(
        (success : any ) => {
          this.posts = success
          this.posts.reverse()
        }
      )
  }

  getPermission(){
    console.log(this.loginService.returnPermission())
    return this.loginService.returnPermission()

  }

  createContent(type: string){

    this.matDialog.open(
      ContentCreatorComponent, {
        autoFocus: true,
        panelClass: 'dialog-contentCreator',
        data: {
          type: type
        }
      }
    )
    .afterClosed()
    .subscribe(
      (success: any) => {
        if (success){

        }
      } 
    )

  }

}
