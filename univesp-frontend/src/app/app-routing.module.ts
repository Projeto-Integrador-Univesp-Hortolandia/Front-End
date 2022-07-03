import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecSenhaComponent } from './login/rec-senha/rec-senha.component';
import { HasAuthGuard, HasAuthGuardChild } from './shared/guards/has-auth.guard';
import { HasLoggedGuard } from './shared/guards/has-logged.guard';
import { LoggedGuard } from './shared/guards/logged.guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	},
  { 
    path: 'login', 
    loadChildren: 
      () => import('./login/login.module').then(m => m.LoginModule), 
    canLoad: [HasLoggedGuard],
    data: { title: 'Login' }
   },
  { path: 'rec-senha', component: RecSenhaComponent },
  { 
    path: 'home', 
    loadChildren: 
      () => import('./content/content.module').then(m => m.ContentModule),
      canLoad: [HasAuthGuard],
      data: { title: 'Veículos' }
  }, 
  { 
    path: 'messeger',
     loadChildren: 
      () => import('./messeger/messeger.module').then(m => m.MessegerModule),
    canLoad: [HasAuthGuard]
  },
  { 
    path: 'registers', 
    loadChildren: 
      () => import('./content/registers/registers.module').then(m => m.RegistersModule),
    canLoad: [HasAuthGuard]
  },
  { 
    path: 'feed-news', 
    loadChildren: 
      () => import('./content/feed-news/feed-news.module').then(m => m.FeedNewsModule),
    canLoad: [HasAuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
