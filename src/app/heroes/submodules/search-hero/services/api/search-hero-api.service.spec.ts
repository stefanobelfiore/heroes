import { TestBed } from '@angular/core/testing';

import { SearchHeroApiService } from './search-hero-api.service';

describe('SearchHeroeApiService', () => {
  let service: SearchHeroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHeroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
