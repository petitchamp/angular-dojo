/**
 * Created by KE on 2016/8/11.
 */
import  { Injectable } from '@angular/core';
import { HEROES } from './mock-heros'
@Injectable()
export class HeroService{
    getHeroes()
    {
        return Promise.resolve(HEROES);
    }
}
