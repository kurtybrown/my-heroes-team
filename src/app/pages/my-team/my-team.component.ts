import { Component, OnInit } from '@angular/core';
import { HeroCardInterface } from 'src/app/models/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styles: [
  ]
})
export class MyTeamComponent implements OnInit {

  myHeroesTeam: HeroCardInterface[] = [];

  constructor(private api:HeroService) { }

  ngOnInit(): void {
    
    this.getTeam();
  }

  getTeam()
  {
    this.api.getMyTeam();
  }

}
