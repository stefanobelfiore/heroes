import { TestBed } from '@angular/core/testing';

import { ViewHeroesApiService } from './view-heroes-api.service';

describe('ViewHeroesApiService', () => {
  let service: ViewHeroesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewHeroesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
