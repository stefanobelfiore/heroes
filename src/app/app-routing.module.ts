import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/dashboards/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/modules/heroes.module').then(module => module.HeroesModule),
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
