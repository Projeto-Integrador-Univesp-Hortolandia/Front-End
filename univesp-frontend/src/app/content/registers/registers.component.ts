import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { RegisterResponsibleComponent } from './register-responsible/register-responsible.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) { }

  displayedColumns: string[] = [
		'Ano',
		'Turma',
		'Periodo',
		'Sala',
    'Controls'
	];

  data = {
    Ano: '1° ano',
    Turma: 'SA113-17002',
    Periodo: 'Tarde',
    Sala: 'Sala 01'
  }

  dataLoop = Array.from({length: 20}).map((_, i) => this.data )

  _dataSource!: MatTableDataSource<any>
  breakPoint: boolean = false;

  ngOnInit(): void {
    this._dataSource = new MatTableDataSource(this.dataLoop)

    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.breakPoint = true;
          } else {
            this.breakPoint = false;
          }
      });
  }

  registerGroups(){

    this.matDialog.open(
      RegisterGroupComponent,
      {
        autoFocus: false,
        panelClass: 'dialog-template',
        data: ''
      }
    )

  }

  registerTeacher(){

    this.matDialog.open(
      RegisterTeacherComponent,
      {
        autoFocus: false,
        panelClass: 'dialog-template',
        data: ''
      }
    )

  }

  registerStudent(){

    this.matDialog.open(
      RegisterStudentComponent,
      {
        autoFocus: false,
        panelClass: 'dialog-template',
        data: ''
      }
    )

  }

  registerResponsible(){

    this.matDialog.open(
      RegisterResponsibleComponent,
      {
        autoFocus: false,
        panelClass: 'dialog-template',
        data: ''
      }
    )

  }

}
