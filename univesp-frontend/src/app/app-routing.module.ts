import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/shared/components/components.module').then(m => m.ComponentsModule) },
  //{ path: '', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  //{ path: 'home', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  { path: 'messeger', loadChildren: () => import('./messeger/messeger.module').then(m => m.MessegerModule) },
  { path: 'cadastros', loadChildren: () => import('src/app/content/registers/registers.module').then(m => m.RegistersModule) },
  //{ path: 'registers', loadChildren: () => import('./content/registers/registers.module').then(m => m.RegistersModule) },
  { path: 'noticias', loadChildren: () => import('./content/feed-news/feed-news.module').then(m => m.FeedNewsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
