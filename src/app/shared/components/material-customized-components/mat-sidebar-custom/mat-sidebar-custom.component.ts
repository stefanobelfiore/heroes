import { Component, Input } from '@angular/core';
import { MatSidebarItem } from './models/mat-sidebar-items.models';

@Component({
  selector: 'app-mat-sidebar-custom',
  templateUrl: './mat-sidebar-custom.component.html',
  styleUrls: ['./mat-sidebar-custom.component.scss']
})
export class MatSidebarCustomComponent {

  @Input() sidebarItems: MatSidebarItem[] = [];
}
