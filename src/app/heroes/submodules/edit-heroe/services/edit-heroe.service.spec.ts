import { TestBed } from '@angular/core/testing';

import { EditHeroeService } from './edit-heroe.service';

describe('EditHeroeService', () => {
  let service: EditHeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
