import { TestBed } from '@angular/core/testing';

import { HasLoggedGuard } from './has-logged.guard';

describe('HasLoggedGuard', () => {
  let guard: HasLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
