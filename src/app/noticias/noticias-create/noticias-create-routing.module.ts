import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasCreateComponent } from './noticias-create.component';

const routes: Routes = [{ path: '', component: NoticiasCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasCreateRoutingModule { }
