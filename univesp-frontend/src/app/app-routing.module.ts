import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) }, { path: 'messeger', loadChildren: () => import('./messeger/messeger.module').then(m => m.MessegerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
