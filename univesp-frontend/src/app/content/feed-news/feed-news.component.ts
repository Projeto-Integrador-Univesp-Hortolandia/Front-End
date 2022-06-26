import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentCreatorComponent } from './content-creator/content-creator.component';

@Component({
  selector: 'app-feed-news',
  templateUrl: './feed-news.component.html',
  styleUrls: ['./feed-news.component.scss']
})
export class FeedNewsComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
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
