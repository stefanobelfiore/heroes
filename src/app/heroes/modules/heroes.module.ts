import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { RouterModule } from '@angular/router';
import { HeroesPageComponent } from '../pages/heroes-page.component';
import { HeroesComponentsModule } from '../components/heroes-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core/core.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';
import { NgxsModule } from '@ngxs/store';
import { StateClass } from '@ngxs/store/internals';
import { HeroesPageState } from '../ngxs/heroes.state';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const states: StateClass[] = [HeroesPageState];

@NgModule({
  declarations: [HeroesPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxsModule.forFeature(states),
    CoreModule,
    SharedComponentsModule,
    HeroesRoutingModule,
    HeroesComponentsModule
  ]
})
export class HeroesModule { }
