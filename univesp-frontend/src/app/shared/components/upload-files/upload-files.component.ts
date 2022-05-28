import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFilesComponent implements OnInit {

  constructor() { }

  isOver: boolean = false

  ngOnInit(): void {
  }

  testFile(){
    console.log('Aoooooooooo bubina')
  }

}
