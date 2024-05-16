import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroComponent } from './create-hero.component';
import { CoreModule } from '@app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';

describe('CreateHeroeComponent', () => {
  let component: CreateHeroComponent;
  let fixture: ComponentFixture<CreateHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHeroComponent],

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
    fixture = TestBed.createComponent(CreateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
