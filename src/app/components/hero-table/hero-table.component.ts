import { Component } from '@angular/core';
import { Hero, HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'rx-hero-table',
    templateUrl: './hero-table.component.html',
    styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent {
    heroes$: Observable<Hero[]> = this.hero.heroes$;

    constructor(public hero: HeroService) {}

    doSearch(event: any) {
        this.hero.searchBS.next(event.target.value);
    }
}
