import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { MessageService } from './message.service';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';




@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { 

  }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add("Hero Service : fetched heroes");
    return of(HEROES);
  }

}
