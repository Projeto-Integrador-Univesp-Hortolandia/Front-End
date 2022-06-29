import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedService } from 'src/app/services/register/feed.service';
import { ContentCreatorComponent } from './content-creator/content-creator.component';

@Component({
  selector: 'app-feed-news',
  templateUrl: './feed-news.component.html',
  styleUrls: ['./feed-news.component.scss']
})
export class FeedNewsComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.getFeed()
  }

  feedList: any = []

  getFeed(){
    this.feedService.Get({url: 'Home'}).subscribe(
      ((success: any) => {
        this.feedList = success
      })
    )
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
