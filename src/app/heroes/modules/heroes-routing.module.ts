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
        path: 'edit-heroes',
        loadChildren: () => import('../submodules/edit-heroe/modules/edit-heroe.module').then(module => module.EditHeroeModule),
      },
      {
        path: 'view-heroes',
        loadChildren: () => import('../submodules/view-heroes/modules/view-heroes.module').then(module => module.ViewHeroesModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
