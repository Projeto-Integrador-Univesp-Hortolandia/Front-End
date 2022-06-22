import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { FeedNewsComponent } from './feed-news/feed-news.component';
import { RegistersComponent } from './registers/registers.component';

const routes: Routes = [
    { 
      path: '', 
      component: ContentComponent ,
      children: [
        { path: 'cadastros', component: RegistersComponent },
        { path: 'noticias', component: FeedNewsComponent }
      ]
    },
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
