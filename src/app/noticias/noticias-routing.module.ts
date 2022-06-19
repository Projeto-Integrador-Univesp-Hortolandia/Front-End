import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';

import { NoticiasCreateComponent } from './noticias-create/noticias-create.component';
import { NoticiasReadComponent } from './noticias-read/noticias-read.component';
import { NoticiasUpdateComponent } from './noticias-update/noticias-update.component';
import { NoticiasComponent } from './noticias/noticias.component';


const routes: Routes = [
 // { path: '', redirectTo: 'content'},//, pathMatch: 'full' },

  { path: '', component: NoticiasComponent,
              //component: NavBarComponent,
              //component: ContentComponent,

    children: [{ path: '', component: NoticiasReadComponent
      },

        { path: 'cadastro',
          children: [{ path: '', component: NoticiasCreateComponent },
            { path: ':id', component: NoticiasCreateComponent, pathMatch: 'full' }]
        },

        { path: ':id', component: NoticiasUpdateComponent, pathMatch: 'full'
      }
    ]
  },

  //{ path: '', component: NavBarComponent},
  //{ path: '**', redirectTo: '' }


]

  @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  export class NoticiasRoutingModule { }
