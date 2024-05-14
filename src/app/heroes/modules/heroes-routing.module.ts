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
        path: 'edit-hero',
        loadChildren: () => import('../submodules/edit-hero/modules/edit-heroe.module').then(module => module.EditHeroModule),
      },
      {
        path: 'view-heroes',
        loadChildren: () => import('../submodules/view-heroes/modules/view-heroes.module').then(module => module.ViewHeroesModule),
      },
      {
        path: 'create-hero',
        loadChildren: () => import('../submodules/create-hero/modules/create-hero.module').then(module => module.CreateHeroModule),
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
