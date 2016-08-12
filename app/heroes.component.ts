import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from  './hero';
import {HeroService} from "./hero.service";
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{
    constructor(private  heroService:HeroService,
                    private router:Router){

    }
    getHeros()
    {
        this.heroService.getHeroes().then(heroes=> this.heroes=heroes);
    }
    title = 'Tour of Heroes';
    heroes : Hero[];
    selectedHero:Hero;
    onSelect(hero:Hero){
        this.selectedHero = hero;
    }
    ngOnInit(){
        this.getHeros();
    }
    gotoDetail(){
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
}


