import { TestBed } from '@angular/core/testing';

import { RecSenhaService } from './rec-senha.service';

describe('RecSenhaService', () => {
  let service: RecSenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecSenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
