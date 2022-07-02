import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecSenhaComponent } from './login/rec-senha/rec-senha.component';
import { LoggedGuard } from './shared/guards/logged.guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'rec-senha', component: RecSenhaComponent },
  { path: 'home', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) }, 
  { path: 'messeger', loadChildren: () => import('./messeger/messeger.module').then(m => m.MessegerModule) },
  { path: 'registers', loadChildren: () => import('./content/registers/registers.module').then(m => m.RegistersModule) },
  { path: 'feed-news', loadChildren: () => import('./content/feed-news/feed-news.module').then(m => m.FeedNewsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
