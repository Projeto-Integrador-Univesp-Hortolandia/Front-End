import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) }, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) }, 
  { path: 'messeger', loadChildren: () => import('./messeger/messeger.module').then(m => m.MessegerModule) },
  { path: 'registers', loadChildren: () => import('./content/registers/registers.module').then(m => m.RegistersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
