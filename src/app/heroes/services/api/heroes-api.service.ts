import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroApiItem } from '@app/heroes/models/api/heroes-api.models';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesApiService {


  constructor(private http: HttpClient) { }


  getHeroes() {
    return this.http.get<HeroApiItem[]>(`${environment.apiDefault}/heroes`);
  }

  getHeroById(id: string) {
    return this.http.get<HeroApiItem | undefined>(`${environment.apiDefault}/heroes/${id}`)
  }

  getSuggestions(query: string) {
    return this.http.get<HeroApiItem[]>(`${environment.apiDefault}/heroes?q=${query}&_limit=6`);
  }


  addHero(hero: HeroApiItem) {
    return this.http.post<HeroApiItem>(`${environment.apiDefault}/heroes`, hero);
  }

  updateHero(hero: HeroApiItem): Observable<HeroApiItem> {
    if (!hero.id) throw Error('Hero id is required');

    return this.http.patch<HeroApiItem>(`${environment.apiDefault}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string) {

    return this.http.delete(`${environment.apiDefault}/heroes/${id}`)
  }

}
