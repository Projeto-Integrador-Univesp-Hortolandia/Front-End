import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [
		'Ano',
		'Turma',
		'Periodo',
		'Sala',
    'Controls'
	];

  dataValues = [
    {
      Ano: '1° ano',
      Turma: 'SA113-17002',
      Periodo: 'Tarde',
      Sala: 'Sala 01'
    },
    {
      Ano: '1° ano',
      Turma: 'SA113-17002',
      Periodo: 'Tarde',
      Sala: 'Sala 01'
    },
    {
      Ano: '1° ano',
      Turma: 'SA113-17002',
      Periodo: 'Tarde',
      Sala: 'Sala 01'
    },
  ]

  _dataSource!: MatTableDataSource<any>

  ngOnInit(): void {
    this._dataSource = new MatTableDataSource(this.dataValues)
  }

}
