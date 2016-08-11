import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeroDetailComponent} from './hero-detail.component'
import { FormsModule } from '@angular/forms';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
@NgModule({
    imports:      [ BrowserModule , FormsModule],
    declarations: [ AppComponent, HeroesComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ HeroService]
})
export class AppModule { }
