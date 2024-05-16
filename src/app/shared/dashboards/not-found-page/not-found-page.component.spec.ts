import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NgxsModule } from '@ngxs/store';


import { environment } from '@environments/environment';

import { AppRoutingModule } from '@app/app-routing.module';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent],

      imports: [
        NgxsModule.forRoot(undefined, {
          developmentMode: !environment.production,
        }),
        HttpClientTestingModule,
        AppRoutingModule,

      ],
    });
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
