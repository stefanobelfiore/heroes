import { TestBed } from '@angular/core/testing';

import { CreateHeroService } from './create-hero.service';

describe('CreateHeroeService', () => {
  let service: CreateHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
