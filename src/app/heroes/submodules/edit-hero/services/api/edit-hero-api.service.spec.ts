import { TestBed } from '@angular/core/testing';

import { EditHeroeApiService } from './edit-hero-api.service';

describe('EditHeroeApiService', () => {
  let service: EditHeroeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHeroeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
