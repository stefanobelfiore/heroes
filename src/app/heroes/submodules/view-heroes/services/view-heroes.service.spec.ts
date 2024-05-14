import { TestBed } from '@angular/core/testing';

import { ViewHeroesService } from './view-heroes.service';

describe('ViewHeroesService', () => {
  let service: ViewHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
