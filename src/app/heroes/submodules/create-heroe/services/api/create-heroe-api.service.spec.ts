import { TestBed } from '@angular/core/testing';

import { CreateHeroeApiService } from './create-heroe-api.service';

describe('CreateHeroeApiService', () => {
  let service: CreateHeroeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHeroeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
