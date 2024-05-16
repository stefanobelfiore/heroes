import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpinnerCustomComponent } from './mat-spinner-custom.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { SharedComponentsModule } from '../../shared-components.module';

describe('MatSpinnerCustomComponent', () => {
  let component: MatSpinnerCustomComponent;
  let fixture: ComponentFixture<MatSpinnerCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatSpinnerCustomComponent],

      imports: [
        HttpClientModule,
        NgxsModule.forRoot(undefined, {
          developmentMode: !environment.production,
        }),
        SharedComponentsModule,
        BrowserAnimationsModule,
        CoreModule,
        HttpClientTestingModule,
        HeroesComponentsModule,
        AppRoutingModule,
      ]
    });
    fixture = TestBed.createComponent(MatSpinnerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
