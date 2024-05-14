import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSidebarCustomComponent } from './mat-sidebar-custom.component';

describe('MatSidebarCustomComponent', () => {
  let component: MatSidebarCustomComponent;
  let fixture: ComponentFixture<MatSidebarCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatSidebarCustomComponent]
    });
    fixture = TestBed.createComponent(MatSidebarCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
