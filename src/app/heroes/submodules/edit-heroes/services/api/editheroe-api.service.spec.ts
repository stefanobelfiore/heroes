import { TestBed } from '@angular/core/testing';

import { EditheroeApiService } from './editheroe-api.service';

describe('EditheroeApiService', () => {
  let service: EditheroeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditheroeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
