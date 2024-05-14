import { TestBed } from '@angular/core/testing';

import { CreateHeroApiService } from './create-hero-api.service';

describe('CreateHeroeApiService', () => {
  let service: CreateHeroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHeroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
