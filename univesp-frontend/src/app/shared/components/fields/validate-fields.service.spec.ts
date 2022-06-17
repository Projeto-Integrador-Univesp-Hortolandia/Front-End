import { TestBed } from '@angular/core/testing';

import { ValidateFieldsService } from './validate-fields.service';

describe('ValidateFieldsService', () => {
  let service: ValidateFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
