import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})

export class DashboardComponent implements OnInit {

  heroesList: any;

  constructor(private api:HeroService) {

  }

  ngOnInit(): void {

    this.listHeroes();
  }

  public listHeroes()
  {
    this.api.getHeroes().subscribe(data =>
      {
        console.log(data);
      })
  }

}
