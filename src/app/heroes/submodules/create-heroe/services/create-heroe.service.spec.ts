import { TestBed } from '@angular/core/testing';

import { CreateHeroeService } from './create-heroe.service';

describe('CreateHeroeService', () => {
  let service: CreateHeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
