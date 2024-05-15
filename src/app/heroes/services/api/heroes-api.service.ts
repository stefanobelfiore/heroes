import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroItem } from '@app/heroes/models/api/heroes-api.models';
import { environment } from '@environments/environment';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesApiService {


  constructor(private http: HttpClient) { }


  getHeroes() {
    return this.http.get<HeroItem[]>(`${environment.apiDefault}/heroes`);
  }

  getHeroById(id: string) {
    return this.http.get<HeroItem | undefined>(`${environment.apiDefault}/heroes/${id}`)
  }

  getSuggestions(query: string) {
    return this.http.get<HeroItem[]>(`${environment.apiDefault}/heroes?q=${query}&_limit=6`);
  }


  addHero(hero: HeroItem) {
    return this.http.post<HeroItem>(`${environment.apiDefault}/heroes`, hero);
  }

  updateHero(hero: HeroItem): Observable<HeroItem> {
    if (!hero.id) throw Error('Hero id is required');

    return this.http.patch<HeroItem>(`${environment.apiDefault}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(id: string): Observable<boolean> {

    return this.http.delete(`${environment.apiDefault}/heroes/${id}`)
      .pipe(
        map(resp => true),
        catchError(err => of(false)),
      );
  }

}
