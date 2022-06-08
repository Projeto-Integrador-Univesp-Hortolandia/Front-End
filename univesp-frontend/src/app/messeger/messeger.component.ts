import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-messeger',
  templateUrl: './messeger.component.html',
  styleUrls: ['./messeger.component.scss']
})
export class MessegerComponent implements OnInit {
  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;


  constructor() { }

  ngOnInit() {
  }


  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }


}
