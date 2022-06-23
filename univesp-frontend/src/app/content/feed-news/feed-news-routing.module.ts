import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasCreateComponent } from './noticias-create/noticias-create.component';
import { NoticiasReadComponent } from './noticias-read/noticias-read.component';
import { NoticiasUpdateComponent } from './noticias-update/noticias-update.component';
import { FeedNewsComponent } from './feed-news.component';

const routes: Routes = [

   { path: '', component: FeedNewsComponent,

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
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [


  ]
})
export class FeedNewsRoutingModule { }
