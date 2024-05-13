import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroeComponent } from './edit-heroe.component';

describe('EditHeroeComponent', () => {
  let component: EditHeroeComponent;
  let fixture: ComponentFixture<EditHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroeComponent]
    });
    fixture = TestBed.createComponent(EditHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
