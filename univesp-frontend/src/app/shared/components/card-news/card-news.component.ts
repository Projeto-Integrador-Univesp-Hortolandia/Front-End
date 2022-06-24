import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardNewsComponent implements OnInit {

  constructor() { }
  
  @Input() hasText: boolean = false
  @Input() hasImage: boolean = false
  @Input() hasAlert: boolean = false
  @Input() alertType: string = 'warning'

  ngOnInit(): void {
  }

}
