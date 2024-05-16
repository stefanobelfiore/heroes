import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeroComponent } from './search-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchHeroComponent', () => {
  let component: SearchHeroComponent;
  let fixture: ComponentFixture<SearchHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHeroComponent],

      imports: [
        HttpClientModule,
        NgxsModule.forRoot(undefined, {
          developmentMode: !environment.production,
        }),
        SharedComponentsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CoreModule,
        HttpClientTestingModule,
        HeroesComponentsModule,
        AppRoutingModule,
      ]
    });
    fixture = TestBed.createComponent(SearchHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
