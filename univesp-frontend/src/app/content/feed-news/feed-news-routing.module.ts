import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedNewsComponent } from './feed-news.component';

const routes: Routes = [{ path: '', component: FeedNewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedNewsRoutingModule { }
