import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMessengerComponent } from './list-messenger.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ListMessengerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListMessengerRoutingModule { }
