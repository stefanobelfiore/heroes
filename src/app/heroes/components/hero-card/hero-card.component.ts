import { Component, Input, OnInit } from '@angular/core';
import { HeroCardItem } from './models/hero-card.models';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() public hero!: HeroCardItem | undefined;



  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }
}
