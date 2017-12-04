import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { MessageService } from './message.service';

import { Hero } from './hero';




@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  
  constructor(
    private http : HttpClient,
    private messageService : MessageService
  ) {}

  getHeroes() : Observable<Hero[]> {
    this.messageService.add("Hero Service : fetched heroes");
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id : number) : Observable<Hero> {
      this.messageService.add(`HeroService : fetched hero id=${id}`);
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url);
  }

  private log(message : string){
    this.messageService.add(message);
  }

}
