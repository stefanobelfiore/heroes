import { NotFoundPageComponent } from './../../shared/dashboards/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPageComponent } from '../pages/heroes-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesPageComponent,
    children: [
      {
        path: 'edit-hero/:id',
        loadChildren: () => import('../submodules/create-hero/modules/create-hero.module').then(module => module.CreateHeroModule),
      },
      {
        path: 'create-hero',
        loadChildren: () => import('../submodules/create-hero/modules/create-hero.module').then(module => module.CreateHeroModule),
      },
      {
        path: 'search-hero',
        loadChildren: () => import('../submodules/search-hero/modules/search-hero.module').then(module => module.SearchHeroModule),
      },
      {
        path: 'view-heroes',
        loadChildren: () => import('../submodules/view-heroes/modules/view-heroes.module').then(module => module.ViewHeroesModule),
      },
      {
        path: '',
        redirectTo: 'view-heroes',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
