import { TestBed } from '@angular/core/testing';

import { MessengersService } from './messengers.service';

describe('MessengersService', () => {
  let service: MessengersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
