import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroeComponent } from './create-heroe.component';

describe('CreateHeroeComponent', () => {
  let component: CreateHeroeComponent;
  let fixture: ComponentFixture<CreateHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHeroeComponent]
    });
    fixture = TestBed.createComponent(CreateHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
