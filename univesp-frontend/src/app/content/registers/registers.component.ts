import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
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

  ngOnInit(): void {
    this._dataSource = new MatTableDataSource(this.dataLoop)
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

}
