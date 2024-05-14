import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonCustomComponent } from './mat-button-custom.component';
import { CoreModule } from '@app/core/core.module';

describe('MatButtonCustomComponent', () => {
  let component: MatButtonCustomComponent;
  let fixture: ComponentFixture<MatButtonCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatButtonCustomComponent],
      imports: [CoreModule],
    });
    fixture = TestBed.createComponent(MatButtonCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
