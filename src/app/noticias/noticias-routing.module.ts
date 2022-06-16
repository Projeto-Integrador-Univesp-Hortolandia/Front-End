import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasCreateComponent } from './noticias-create/noticias-create.component';
import { NoticiasReadComponent } from './noticias-read/noticias-read.component';
import { NoticiasUpdateComponent } from './noticias-update/noticias-update.component';
import { NoticiasComponent } from './noticias/noticias.component';


const routes: Routes = [

/*  {
      path: '',
      redirectTo: 'noticias',
      pathMatch: 'full'
  },*/
  {
    path: 'noticias', component: NoticiasComponent,
    children: [
      {
        path: '',
        component: NoticiasReadComponent
      },
      {
        path: 'cadastrar',
        children: [
          {
            path: '',
            component: NoticiasCreateComponent
          },
          {
            path: ':id',
            component: NoticiasCreateComponent
          }
        ]
      },
      {
        path: ':id',
        component: NoticiasUpdateComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'noticias' },

];

/*
const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias',
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    children:[{ path: '', component: NoticiasComponent }]
  },
  {
    path: 'cadastrar',
    children: [ {path: '', component: NoticiasCreateComponent },
                {path: ':id', component: NoticiasCreateComponent }
              ]
  },
  {
    path: ':id', component: NoticiasUpdateComponent, pathMatch: 'full'},

  { path: '**', redirectTo: 'noticias' },
];
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
