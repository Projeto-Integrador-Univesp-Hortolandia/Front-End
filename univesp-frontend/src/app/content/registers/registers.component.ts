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

import { displayGroups, displayTeachers, displayStudents, displayResponsibles } from 'src/app/shared/utils/displayedColumns';

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

  displayedColumnsGroups: string[] = displayGroups
  displayedColumnsTeachers: string[] = displayTeachers
  displayedColumnsStudents: string[] = displayStudents
  displayedColumnsResponsibles: string[] = displayResponsibles

  groups!: MatTableDataSource<any>
  teachers!: MatTableDataSource<any>
  students!: MatTableDataSource<any>
  responsibles!: MatTableDataSource<any>
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
      this.getTeachers()
      this.getStudents()
      this.getResposibles()
  }

  getAll(){

  }

  getGroups(){
    this.registerService.Get({ url: 'groups' })
      .subscribe(
        (success: any) => {
          this.groups = new MatTableDataSource(success)
        }
      )
  }

  getTeachers(){
    this.registerService.Get({ url: 'teachers' })
      .subscribe(
        (success: any) => {
          this.teachers = new MatTableDataSource(success)
          console.log(this.teachers.data[0]['Nome'])
        }
      )
  }

  getStudents(){
    this.registerService.Get({ url: 'students' })
    .subscribe(
      (success: any) => {
        this.students = new MatTableDataSource(success)
      }
    )
  }

  getResposibles(){
    this.registerService.Get({ url: 'responsibles' })
      .subscribe(
        (success: any) => {
          this.responsibles = new MatTableDataSource(success)
        }
      )
  }

  registerGroups(type: string, id: number = 0){

    this.matDialog.open(
      RegisterGroupComponent,
      {
        autoFocus: false,
        panelClass: 'dialog-template',
        data: {
          type: type,
          id: id
        }
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
    this.groups.filter = filterValue.trim().toLowerCase();
  }

  public deleteItem(type: string, id: number): boolean{

    this.registerService.Delete({ url: type, body: id })
      .subscribe(
        (success: any) => {
          this.matSnackBar.open(`${type} deletado com sucesso`, '', { duration: 1500 })
          return true
        }, error => {
          this.matSnackBar.open('Ocorreu um erro', '', {duration: 2000})
          return false
        }
      )
    return true 
  }

}
