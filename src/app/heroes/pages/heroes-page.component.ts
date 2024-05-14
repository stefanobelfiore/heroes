import { Component } from '@angular/core';
import { MatSidebarItem } from '@app/shared/components/material-customized-components/mat-sidebar-custom/models/mat-sidebar-items.models';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent {

  readonly sidebarItems: MatSidebarItem[] = [
    { label: 'Listado de heroes', icon: 'label', url: './view-heroes' },
    { label: 'Añadir heroe', icon: 'add', url: './create-hero' },
    { label: 'Buscar heroe', icon: 'search', url: './search-hero' },
  ];
}
