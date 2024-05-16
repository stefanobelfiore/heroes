import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmDialogCustomComponent } from './mat-confirm-dialog-custom.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { HeroesComponentsModule } from '../heroes-components.module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('MatConfirmDialogCustomComponent', () => {
  let component: MatConfirmDialogCustomComponent;
  let fixture: ComponentFixture<MatConfirmDialogCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatConfirmDialogCustomComponent],

      imports: [
        HttpClientModule,
        NgxsModule.forRoot(undefined, {
          developmentMode: !environment.production,
        }),
        SharedComponentsModule,
        BrowserAnimationsModule,
        CoreModule,
        MatDialogModule,
        HttpClientTestingModule,
        HeroesComponentsModule,
        AppRoutingModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
    });
    fixture = TestBed.createComponent(MatConfirmDialogCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
