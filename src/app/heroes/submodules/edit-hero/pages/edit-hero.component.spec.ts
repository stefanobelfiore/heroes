import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroComponent } from './edit-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { environment } from '@environments/environment';
import { NgxsModule } from '@ngxs/store';
import { CoreModule } from '@app/core/core.module';

describe('EditHeroeComponent', () => {
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroComponent],

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
    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
