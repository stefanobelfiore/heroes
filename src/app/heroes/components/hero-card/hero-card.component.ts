import { Component, Input } from '@angular/core';
import { HeroCardItem } from './models/hero-card.models';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {

  @Input() public hero: HeroCardItem | undefined;


}
