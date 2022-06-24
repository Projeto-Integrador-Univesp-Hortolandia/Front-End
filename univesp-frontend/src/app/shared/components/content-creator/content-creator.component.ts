import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-content-creator',
  templateUrl: './content-creator.component.html',
  styleUrls: ['./content-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
