import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeroesComponent } from './view-heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { CoreModule } from '@app/core/core.module';

describe('ViewHeroesComponent', () => {
  let component: ViewHeroesComponent;
  let fixture: ComponentFixture<ViewHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHeroesComponent],

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
    fixture = TestBed.createComponent(ViewHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
