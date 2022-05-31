import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';
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
    private breakpointObserver: BreakpointObserver,
    private registerService: RegisterService,
    private matSnackBar: MatSnackBar
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

  // dataLoop = Array.from({length: 20}).map((_, i) => this.data )

  _dataSource!: MatTableDataSource<any>
  breakPoint: boolean = false;

  ngOnInit(): void {
    // this._dataSource = new MatTableDataSource(this.dataLoop)

    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.breakPoint = true;
          } else {
            this.breakPoint = false;
          }
      });

      this.getGroups()
  }

  getAll(){

  }

  getGroups(){
    this.registerService.Get({ url: 'groups' })
      .subscribe(
        (success: any) => {
          this._dataSource = new MatTableDataSource(success)
        }
      )
  }

  getTeachers(){

  }

  getStudents(){
    
  }

  getResposibles(){

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
    .afterClosed()
    .subscribe(
      (response: boolean) => {
        response ? this.getGroups() : ''
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._dataSource.filter = filterValue.trim().toLowerCase();
  }

  public deleteItem(type: string, id: number){

    this.registerService.Delete({ url: type, body: id })
      .subscribe(
        (success: any) => {
          this.matSnackBar.open(`${type} deletado com sucesso`, '', { duration: 1500 })
        }, error => {
          this.matSnackBar.open('Ocorreu um erro', '', {duration: 2000})
        }
      )

  }

}
