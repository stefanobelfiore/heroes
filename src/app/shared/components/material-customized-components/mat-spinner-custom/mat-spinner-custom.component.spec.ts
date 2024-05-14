import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpinnerCustomComponent } from './mat-spinner-custom.component';

describe('MatSpinnerCustomComponent', () => {
  let component: MatSpinnerCustomComponent;
  let fixture: ComponentFixture<MatSpinnerCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatSpinnerCustomComponent]
    });
    fixture = TestBed.createComponent(MatSpinnerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
