/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterMessengerComponent } from 'src/app/messeger/register-messenger/register-messenger.component';
import { ListMessengerComponent } from 'src/app/messeger/list-messenger/list-messenger.component';
import { ViewMessengerComponent } from 'src/app/messeger/view-messenger/view-messenger.component';
import { MessegerComponent } from './messeger.component';


const routes: Routes = [
  { path: '',
    component: MessegerComponent,
    children: [
      {
        path: 'filmes',
        component: ListMessengerComponent
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            component: RegisterMessengerComponent
          },
          {
            path: ':id',
            component: RegisterMessengerComponent
          }
        ]
      },
      {
        path: ':id',
        component: ViewMessengerComponent,
        pathMatch: 'full'
      }
    ]
  },
  //{ path: '**', redirectTo: 'filmes' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessegerRoutingModule { }
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessegerComponent } from './messeger.component';
import { MaterialModule } from '../material-module';
import { ListMessengerComponent } from './list-messenger/list-messenger.component';

const routes: Routes = [{ path: '', component: MessegerComponent,
      children: [
      { path: 'filmes', component: ListMessengerComponent }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MaterialModule],
  exports: [RouterModule]
})
export class MessegerRoutingModule { }

