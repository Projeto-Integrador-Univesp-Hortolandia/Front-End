import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessegerComponent } from './messeger.component';

const routes: Routes = [{ path: '', component: MessegerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessegerRoutingModule { }
