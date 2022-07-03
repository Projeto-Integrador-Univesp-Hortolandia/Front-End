import { TestBed } from '@angular/core/testing';

import { ChangeTitleService } from './change-title.service';

describe('ChangeTitleService', () => {
  let service: ChangeTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
