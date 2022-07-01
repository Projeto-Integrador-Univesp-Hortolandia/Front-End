import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardNewsComponent implements OnInit {

  constructor() { }
  
  @Input() content: any = {}
  @Input() hasAlert: boolean = false
  @Input() alertType: string = 'warning'

  ngOnInit(): void {
  }

  timeFromNow(datetime: Date): string {
		return moment(datetime).fromNow();
	}

}
