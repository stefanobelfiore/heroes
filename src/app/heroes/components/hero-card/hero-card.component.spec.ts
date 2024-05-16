import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { HeroesComponentsModule } from '../heroes-components.module';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroCardComponent],
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
    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    component.hero = {
      id: '1212',
      superhero: 'super hero',
      publisher: 'DC Comics',
      alterEgo: 'alter ego',
      firstAppearance: 'first appearance',

    }
    fixture.detectChanges();
  });

  it('should create', () => {
    component.hero = {
      id: '1212',
      superhero: 'super hero',
      publisher: 'DC Comics',
      alterEgo: 'alter ego',
      firstAppearance: 'first appearance',

    }
    expect(component).toBeTruthy();
  });
});
