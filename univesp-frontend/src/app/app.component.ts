import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ChangeTitleService } from './services/changeTitle/change-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'univesp-frontend';

  constructor(
    private router: Router,
    private service: ChangeTitleService
  ){}

  ngOnInit(): void{

    this.router.events
      .pipe(
        filter(e => e instanceof ResolveEnd)
      )
      .subscribe(
        e => {

          let { data } = this.getDeepestChildSnapshot(
            (e as ResolveEnd).state.root
          );

          console.log(data)

          if (data.title){
            this.title = data.title

            console.log(this.title)
            this.service.changeTitle(data.title)
          }

        }
      )

  }

  getDeepestChildSnapshot(
		snapshot: ActivatedRouteSnapshot
	): ActivatedRouteSnapshot {
		let deepestChild = snapshot.firstChild;
		while (deepestChild?.firstChild) {
			deepestChild = deepestChild.firstChild;
		}
		return deepestChild || snapshot;
	}
}
