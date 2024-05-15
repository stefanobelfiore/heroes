import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmDialogCustomComponent } from './mat-confirm-dialog-custom.component';

describe('MatConfirmDialogCustomComponent', () => {
  let component: MatConfirmDialogCustomComponent;
  let fixture: ComponentFixture<MatConfirmDialogCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatConfirmDialogCustomComponent]
    });
    fixture = TestBed.createComponent(MatConfirmDialogCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
