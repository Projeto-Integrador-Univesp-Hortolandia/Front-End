import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeTitleService {

  constructor() { }

  title = new BehaviorSubject<string>('');

  changeTitle(title: string) {
		this.title.next(title);
	}
}
