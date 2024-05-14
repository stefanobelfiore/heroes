import { TestBed } from '@angular/core/testing';

import { EditHeroService } from './edit-heroe.service';

describe('EditHeroeService', () => {
  let service: EditHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
